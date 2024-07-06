import React from 'react';

interface ProjectType {
    url: string;
    text: string;
}

const getYoutubeVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

const Project: React.FC<ProjectType> = ({ url, text }) => {
    const videoId = getYoutubeVideoId(url);
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project">
            {thumbnailUrl && <img src={thumbnailUrl} alt={text} className="thumbnail" />}
            <div className="text">{text}</div>
        </a>
    );
}

export default Project;