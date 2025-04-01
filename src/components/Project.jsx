import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <div className="project-links">
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
