import React from 'react';

interface WebsiteProjectType {
    url: string;
    text: string;
    thumbnailUrl: string
}

const WebsiteProject: React.FC<WebsiteProjectType> = ({ url, text, thumbnailUrl }) => {

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="website-project">
            {thumbnailUrl && <img src={thumbnailUrl} alt={text} className="website-thumbnail" />}
            <div className="website-text">{text}</div>
        </a>
    );
}

export default WebsiteProject;