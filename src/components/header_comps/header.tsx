import React from "react";
import Header_link from "./link";
import Spacer from "../spacer"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Icon from "./icon";

const Header: React.FC = () => {
    return (
        <div className="header">
            <Header_link target="IntroDiv">
                About Me
            </Header_link>

            <Header_link target="Education">
                OSU
            </Header_link>

            <Header_link target="projects">
                Projects
            </Header_link>
            
            <div className="icon_class">
                <a href="/Portfolio/AlexHolly_resume.docx" className="linkid" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
                <Spacer width="25px" />
                <Icon site_link="https://www.linkedin.com/in/alex-holly213/" icon_img={faLinkedin} size='1x'/>
                <Spacer width="25px" />
                <Icon site_link="https://github.com/AlexHolly007" icon_img={faGithub} size='1x'/>
            </div>
        </div>
    )
}

export default Header;