import React, { useEffect, useState } from "react";
import "../intro.css";
import Spacer from "./spacer";
import Image from "./Image_pack";
import OSUPic from '/OSU_pic.jpeg'
import Basketball from '/basketball.jpeg'
import ATV from '/atv.jpeg'
import FootballGame from '/football_game.jpeg'
import Soccer from '/soccer_pic.jpeg'


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
      <div id="Education" ></div>

      <h1>OSU</h1>
      <h2>University can be about a lot more than academics, here are some of those moments I captured along the way.</h2>
      <Spacer height="10vh" width="100%" />

      <div className="container">
        <Image image_path={OSUPic} caption="OSU decleration"/>
        <Image image_path={ATV} caption="ATV group"/>
        <Image image_path={Soccer} caption="IM champions"/>
        <Image image_path={Basketball} caption="IM non-champs"/>
        <Image image_path={FootballGame} caption="GO BEAVS"/>
      </div>
      {/* <h2>Working with the Center for Qualitative Life Sciences</h2> */}

      <div className="scroll-point2"></div>
    </div>
    
  );
};

export default Education;