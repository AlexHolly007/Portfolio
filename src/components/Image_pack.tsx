import React from "react";
import Spacer from "./spacer";

interface ImgType {
    image_path: string;
}

const Image: React.FC<ImgType>= ({image_path}) => {
    return(
        <div>
            <img src={image_path} />
        </div>
    )
}

export default Image