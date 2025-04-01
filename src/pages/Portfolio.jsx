import React from "react";
import Project from "../components/Project.jsx";

const Portfolio = () => {
  const projects = [
    { title: "Bootcamp Pizza Odering Website", deployedLink: "https://p1t1-group3.github.io/ProjectOne/", githubLink: "https://github.com/p1t1-group3/ProjectOne" },
    { title: "Weather DashBoard", deployedLink: "https://weather-dashboard-application-y5xq.onrender.com/", githubLink: "https://github.com/jaguarvusal/Weather-Dashboard-Application" },
    { title: "Content Management System", deployedLink: "#", githubLink: "https://github.com/jaguarvusal/cms.git" },
    { title: "Vehicle Maker", deployedLink: "#", githubLink: "https://github.com/jaguarvusal/Vehicle-Maker" },
    { title: "README Generator", deployedLink: "#", githubLink: "https://github.com/jaguarvusal/README-Generator" },
    { title: "React Portfolio", deployedLink: "https://vusalcodingportfolio.netlify.app/", githubLink: "https://github.com/jaguarvusal/React-Portfolio" }
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
