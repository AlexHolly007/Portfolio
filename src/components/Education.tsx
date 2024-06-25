import React, { useEffect, useState } from "react";
import "../intro.css";
import Spacer from "./spacer";
import Image from "./Image_pack";
import OSUPic from '../assets/OSU_pic.jpeg'
import Basketball from '../assets/basketball.jpeg'
import ATV from '../assets/atv.jpeg'
import FootballGame from '../assets/football_game.jpeg'
import Soccer from '../assets/soccer_pic.jpeg'


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

      <h2>I got so much more from Oregon State then a degree, here are some <br></br>
      of the memories I made along the way.</h2>
      <Spacer height="50px" width="100%" />

      <div className="image_container">
        <Image image_path={OSUPic}/>
        <Image image_path={ATV}/>
        <Image image_path={Soccer}/>
        <Image image_path={Basketball}/>
        <Image image_path={FootballGame}/>
      </div>

      <div className="scroll-point2"></div>
    </div>
    
  );
};

export default Education;