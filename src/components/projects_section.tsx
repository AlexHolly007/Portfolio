import React from "react";
import Project from "./project_cmpnt";

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <h2>I believe one of the best ways to expand and test my knowledge is through through projects. <br></br>
            Here are a some of the recent projects I have been working on.</h2>
            <div className="container">
                <Project url="https://www.youtube.com/watch?v=N3tRFayqVtk&list=PLPtbyHU0DmMmqffxtnHMpGxXKwdiAJqGU&index=3" text="Simple Creature Nueral Net Evolution Simulation"/>
                <Project url="https://www.youtube.com/watch?v=Bfcg4tS8hpw" text="Ecosystem Evolution Simulation"/>
            </div>
        </div>
    )
}

export default Projects