import React from "react";

interface LinkType {
    target: string;
    children: React.ReactNode;
}

const Header_link: React.FC<LinkType> = ({target, children}) => {

    const scroll_to_target = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const target_div = document.getElementById(target)

        if (target_div) {
            target_div.scrollIntoView({behavior: "smooth", block: "center"} );
        }
    };

    return (
        <a href="#" className="linkid" onClick={scroll_to_target}>
            {children}
        </a>
    )

}

export default Header_link;