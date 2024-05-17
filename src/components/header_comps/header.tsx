import React from "react";
import Header_link from "./link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
            
            <Icon site_link="https://github.com/AlexHolly007" icon_img={faGithub} />
        </div>
    )
}

export default Header;