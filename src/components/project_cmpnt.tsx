import React from 'react';

interface ProjectType {
    text: string;
}

const Project: React.FC<ProjectType> = ({text}) => {
    return <div>{text}</div>
}

export default Project;