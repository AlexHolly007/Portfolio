import React from "react";
import Project from "./project_cmpnt";
import WebsiteProject from "./project_site";

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <h2>I believe one of the best ways to expand and test my knowledge is through through projects. Here are a some of the recent projects I have been working on.</h2>
            <div className="container">
                <Project url="https://youtu.be/wBHxsVFhX0U" text="AlexOS C programming"/>
                <Project url="https://www.youtube.com/watch?v=Bfcg4tS8hpw" text="Ecosystem Evolution Simulation"/>
                <WebsiteProject text="Object Detection Net" url="https://github.com/AlexHolly007/Digital-Net" thumbnailUrl="src/assets/digital_net.jpeg"/>
            </div>
        </div>
    )
}

export default Projects