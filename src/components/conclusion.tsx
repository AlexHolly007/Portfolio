import React from "react";
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
                    <Icon site_link="/Portfolio/Bioinfo.docx" icon_img={faFile} size='3x'/>
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