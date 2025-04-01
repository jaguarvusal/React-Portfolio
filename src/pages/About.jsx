import React from "react";
import profileImage from "../assets/user.png";

const About = () => {
  return (
    <section id="about">
      <img src={profileImage} alt="Developer" style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",}} />
      <h2>About Me</h2>
      <p>Hello! I'm Vusal, a passionate full stack web developer currently attending a coding bootcamp with Columbia University. 
      <br></br>
      <br></br>

      Growing up in China, I've always been fascinated by technology and the way it connects people. This curiosity has led me to pursue web development, where I can combine creativity and logic to build dynamic and engaging digital experiences.<br></br>
      <br></br>

      Outside of coding, I'm an avid kickboxer and a huge fan of movies. Kickboxing keeps me focused and disciplined, while movies inspire me with new ideas and perspectives. 
      <br></br>
      <br></br>
      
      I bring this same passion and dedication into my development work, always striving to learn and grow in this ever-evolving field.

      I'm excited to continue my journey as a developer and can't wait to see where this path takes me!</p>
    </section>
  );
};

export default About;
