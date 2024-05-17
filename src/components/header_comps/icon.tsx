import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconTypes{
    icon_img: IconProp;
    site_link: string;
};

const Icon: React.FC<IconTypes> = (icon_img, site_link) => {
    return (
        <a href={site_link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon_img} />
        </a>
    )
};

export default Icon;