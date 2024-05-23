import React from "react";
import Header_link from "./link";
import Spacer from "../spacer"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Icon from "./icon";

const Header: React.FC = () => {
    return (
        <div className="header">
            <p>me</p>
            <p>OSU</p>
            <Header_link target="projects">
                projects
            </Header_link>
            <p>infrastructure</p>
            <p>links</p>
            <div className="icon_class">
                <Icon site_link="https://www.linkedin.com/in/alex-holly213/" icon_img={faLinkedin} />
                <Spacer width="25px" />
                <Icon site_link="https://github.com/AlexHolly007" icon_img={faGithub} />
            </div>
        </div>
    )
}

export default Header;