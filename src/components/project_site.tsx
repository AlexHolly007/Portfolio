import React from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from './header_comps/icon';

interface WebsiteProjectType {
    url: string;
    text: string;
    thumbnailUrl: string;
    gh_link: string;
}

const WebsiteProject: React.FC<WebsiteProjectType> = ({ url, text, thumbnailUrl, gh_link }) => {

    return (
        <a href={url} style={{border: "1px solid white"}} target="_blank" rel="noopener noreferrer" className="website-project">
            {thumbnailUrl && <img src={thumbnailUrl} alt={text} className="website-thumbnail" />}
            <div style={{display: "flex"}}>
                <div className="website-text">{text}</div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon site_link={gh_link} icon_img={faGithub} size='2x'/>
                </div>
            </div>
        </a>
    );
}

export default WebsiteProject;