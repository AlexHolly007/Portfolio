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
                <a href={"https://docs.google.com/document/d/1LZ5sCFjnq4bRzHqrio42gTC8AWEDUmu9/edit?usp=sharing&ouid=116882288099539112958&rtpof=true&sd=true"} className="linkid" target="_blank" rel="noopener noreferrer">Resume</a>
                <Spacer width="25px" />
                <Icon site_link="https://www.linkedin.com/in/alex-holly213/" icon_img={faLinkedin} size='1x'/>
                <Spacer width="25px" />
                <Icon site_link="https://github.com/AlexHolly007" icon_img={faGithub} size='1x'/>
            </div>
        </div>
    )
}

export default Header;