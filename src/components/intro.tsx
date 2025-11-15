import React, { useEffect, useState } from "react";
import "../intro.css";

const Introduction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
    const timer = setTimeout(() => {
      setIsVisible(true);
      console.log("Visibility set to true");
    }, 1000);

    const bounceTimer = setTimeout(() => {
      setIsBouncing(true);
      console.log("Bouncing set to true");
    }, 5000); // Start bouncing after 5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(bounceTimer);
    };
  }, []);

  const text = "Welcome to My Portfolio";
  const text2 = "Student    Software Engineer    Stack Overflow Archaeologist    Data Scientist";

  return (
    <div className="" id="IntroDiv">
      <div>
        {text.split(' ').map((word, index) => (
          <h1 key={index} className={`fade-in-word ${isVisible ? 'visible' : ''}`}>
            {word}
          </h1>
        ))}
      </div>
      <div>
        {text2.split(' ').map((word, index) => (
          <h3 key={index} className={`fade-in-word ${isVisible ? 'visible' : ''} ${isBouncing ? 'bounce' : ''}`}>
            {word}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Introduction;