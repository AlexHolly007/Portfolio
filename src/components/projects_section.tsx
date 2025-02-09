import React, { useEffect, useState } from "react";
import "../intro.css";
import Project from "./project_cmpnt";
import WebsiteProject from "./project_site";
import diginet from '/digital_net.jpeg';
import canvas_ex from '/Canvas_example.jpeg';
import venome from '/Venome-site.jpeg';
import Agent_evolution from '/Agent-Evolution.jpeg'

const Projects: React.FC = () => {
    const [bgColorClass, setBgColorClass] = useState("");

    const handleScroll = () => {
      const offset = window.scrollY;
      const scrollPoint1 = document.querySelector('.scroll-proj-point1') as HTMLElement;
      const scrollPoint2 = document.querySelector('.scroll-proj-point2') as HTMLElement;
      const linksElement= document.getElementsByClassName('linkid');
  
      if (scrollPoint1 && scrollPoint2) {
        const scrollPoint1Top = scrollPoint1.offsetTop;
        const scrollPoint2Top = scrollPoint2.offsetTop;
  
        if (offset+380 > scrollPoint1Top && offset+350 < scrollPoint2Top) {
          setBgColorClass("color3");
          Array.from(linksElement).forEach(container => {
            container.classList.add('scroll-proj-zone');
          });
        } else if (offset > scrollPoint2Top) {
          setBgColorClass("color2");
          Array.from(linksElement).forEach(container => {
            container.classList.remove('scroll-proj-zone');
          });
        } else {
          setBgColorClass("");
          Array.from(linksElement).forEach(container => {
            container.classList.remove('scroll-proj-zone');
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

        <div className="scroll-proj-point1" id="projects">
            <div className={`left-bar ${bgColorClass}`} />
            <div className={`right-bar ${bgColorClass}`} />
            <div id="Education" ></div>

            <h1>Projects</h1>
            <h2>I believe one of the best ways to expand and test my knowledge is through through projects. Here are a some of the recent projects I have been working on.</h2>
            <div className="container">
                <WebsiteProject text="Capstone Project - Venome - Protein Data Visualization and Exploration Platform" url="https://venome.cqls.oregonstate.edu/" thumbnailUrl={venome} gh_link="https://github.com/Venom-Biochem-Lab/venome"/>
                <Project url="https://youtu.be/wBHxsVFhX0U" text="MiniOS - Process/signal handeling, C programming " gh_link="https://github.com/AlexHolly007/AlexOS"/>
                <WebsiteProject text="Student Canvas - GCP - API" url="https://github.com/AlexHolly007/Student-Canvas-GCP" thumbnailUrl={canvas_ex} gh_link="https://github.com/AlexHolly007/Student-Canvas-GCP"/>
                <Project url="https://youtu.be/-A8sF0KUrwk" text="GEO Timelapse - GCP, Google Earth Engine" gh_link="https://github.com/AlexHolly007/gee_project"/>
                <WebsiteProject text="Digital Net - YOLO Object Detection" url="https://github.com/AlexHolly007/Digital-Net" thumbnailUrl={diginet} gh_link="https://github.com/AlexHolly007/Digital-Net"/>
                <WebsiteProject text="Agent Evolution Simulation - Python Project" url="https://github.com/AlexHolly007/Genetic-Evolution-Simulation" thumbnailUrl={Agent_evolution} gh_link="https://github.com/AlexHolly007/Genetic-Evolution-Simulation" />
            </div>

            <div className="scroll-proj-point2"></div>
        </div>
    )
}

export default Projects