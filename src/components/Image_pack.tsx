import React from "react";

interface ImgType {
    image_path: string;
}

const Image: React.FC<ImgType>= ({image_path}) => {
    return(
        <img width="auto" height="300" src={image_path} />
    )
}

export default Image