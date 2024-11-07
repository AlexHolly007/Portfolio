import React from "react";

interface ImgType {
    image_path: string;
    caption: string;
}

const Image: React.FC<ImgType> = ({ image_path, caption }) => {
    return (
        <figure style={{ display: "inline-block", textAlign: "center", margin: 0 }}>
            <img 
                src={image_path} 
                alt="Figure" 
                style={{ height: "300px", width: "auto", display: "block", margin: "0 auto" }}
            />
            <figcaption 
                style={{
                    wordWrap: "break-word",
                    textAlign: "center",
                    marginTop: "0.5em",
                    maxWidth: "300px", // Match the fixed height of the image
                    margin: "0 auto"
                }}
            >
                {caption}
            </figcaption>
        </figure>
    );
};

export default Image