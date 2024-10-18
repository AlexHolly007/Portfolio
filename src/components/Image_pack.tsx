import React from "react";

interface ImgType {
    image_path: string;
    caption: string;
}

const Image: React.FC<ImgType>= ({image_path, caption}) => {
    return(
        <figure>
            <img width="auto" height="300" src={image_path} />
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default Image