import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  const projects = [
    { title: "Project 1", deployedLink: "#", githubLink: "#" },
    { title: "Project 2", deployedLink: "#", githubLink: "#" },
    { title: "Project 3", deployedLink: "#", githubLink: "#" },
    { title: "Project 4", deployedLink: "#", githubLink: "#" },
    { title: "Project 5", deployedLink: "#", githubLink: "#" },
    { title: "Project 6", deployedLink: "#", githubLink: "#" }
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
