import React from "react";

const Project = ({ project }) => {
  return (
    <div
      className="project"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
        <h3 className="project-title">{project.title}</h3>
        <a
          href={project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          GitHub Repository
        </a>
     
    </div>
  );
};

export default Project;
