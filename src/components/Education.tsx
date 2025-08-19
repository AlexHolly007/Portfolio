import React, { useEffect, useState } from "react";
import "../intro.css";
import Spacer from "./spacer";
import Image from "./Image_pack";
import Basketball from '/basketball.jpeg'
import Soccer from '/soccer_pic.jpeg'
import IT from '/IT.jpeg'
import Mecop from '/mecop.jpeg'
import Printer from '/printer.jpeg'

const Education: React.FC = () => {
  const [bgColorClass, setBgColorClass] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;
    const scrollPoint1 = document.querySelector('.scroll-point1') as HTMLElement;
    const scrollPoint2 = document.querySelector('.scroll-point2') as HTMLElement;
    const linksElement= document.getElementsByClassName('linkid');

    if (scrollPoint1 && scrollPoint2) {
      const scrollPoint1Top = scrollPoint1.offsetTop;
      const scrollPoint2Top = scrollPoint2.offsetTop;

      if (offset+380 > scrollPoint1Top && offset+350 < scrollPoint2Top) {
        setBgColorClass("color1");
        Array.from(linksElement).forEach(container => {
          container.classList.add('scroll-zone');
        });
      } else if (offset > scrollPoint2Top) {
        setBgColorClass("color2");
        Array.from(linksElement).forEach(container => {
          container.classList.remove('scroll-zone');
        });
      } else {
        setBgColorClass("");
        Array.from(linksElement).forEach(container => {
          container.classList.remove('scroll-zone');
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-point1">
      <div className={`left-bar ${bgColorClass}`} />
      <div className={`right-bar ${bgColorClass}`} />

      <h1>OSU</h1>
      <h2>University can be about a lot more than academics, here are some of those moments I captured along the way.</h2>
      <div id="Education" ></div>
      <Spacer height="5vh" width="100%" />

      <div className="container-pics">
        <Image image_path={Printer} caption="Built 3d printer for CEAOS center"/>
        <Image image_path={Mecop} caption="Learned a ton from my team at Siemens EDA through MECOP"/>
        <Image image_path={IT} caption="Building compute to deploy AI Image Clustering"/>
        <Image image_path={Soccer} caption="IM champions"/>
        <Image image_path={Basketball} caption="IM non-champs"/>
      </div>

      <div className="scroll-point2"></div>
    </div>
    
  );
};

export default Education;