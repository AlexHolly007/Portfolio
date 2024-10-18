import React from 'react';
import Icon from './header_comps/icon';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

interface ProjectType {
    url: string;
    text: string;
    gh_link: string;
}

const getYoutubeVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

const Project: React.FC<ProjectType> = ({ url, text, gh_link }) => {
    const videoId = getYoutubeVideoId(url);
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project">
            {thumbnailUrl && <img src={thumbnailUrl} alt={text} className="thumbnail" />}
            <div style={{display: "flex"}}>
                <div style={{width: "80%"}} className="text">{text}</div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon site_link={gh_link} icon_img={faGithub} size='2x'/>
                </div>
            </div>
        </a>
    );
}

export default Project;