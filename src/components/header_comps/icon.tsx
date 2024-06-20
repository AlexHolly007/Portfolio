import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconTypes {
    icon_img: IconDefinition;
    site_link: string;
}

const Icon: React.FC<IconTypes>= ({icon_img, site_link}) => {
    return (
        <a href={site_link} className="linkid" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon_img} />
        </a>
    )
};

export default Icon;