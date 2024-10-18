import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "./header_comps/icon";

const Conclusion: React.FC = () => {
    return (
        <div className="conclusion" id="conclusion">
            <div className="container">
                <div className="conclusion_component">
                    <h2>LinkedIn</h2>
                    <Icon site_link="https://www.linkedin.com/in/alex-holly213/" icon_img={faLinkedin} size='3x'/>
                </div>
                <div className="conclusion_component">
                    <h2>Resume</h2>
                    <Icon site_link="https://docs.google.com/document/d/1LZ5sCFjnq4bRzHqrio42gTC8AWEDUmu9/edit?usp=sharing&ouid=116882288099539112958&rtpof=true&sd=true" icon_img={faFile} size='3x'/>
                </div>
                <div className="conclusion_component">
                    <h2>Github</h2>
                    <Icon site_link="https://github.com/AlexHolly007" icon_img={faGithub} size='3x'/>
                </div>
                <div className="conclusion_component">
                    <h2>Youtube</h2>
                    <Icon site_link="https://www.youtube.com/@alexholly6205" icon_img={faYoutube} size='3x'/>
                </div>
            </div>
        </div>
    )
}

export default Conclusion