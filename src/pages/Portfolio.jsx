import React from "react";
import Project from "../components/Project.jsx";

const Portfolio = () => {
  const projects = [
    { 
      title: "Bootcamp Pizza Ordering Website", 
      deployedLink: "https://p1t1-group3.github.io/ProjectOne/", 
      githubLink: "https://github.com/p1t1-group3/ProjectOne",
      image: "/src/assets/pizza.jpg" 
    },
    { 
      title: "Weather Dashboard", 
      deployedLink: "https://weather-dashboard-application-y5xq.onrender.com/", 
      githubLink: "https://github.com/jaguarvusal/Weather-Dashboard-Application",
      image: "/src/assets/weather.jpg" 
    },
    { 
      title: "Content Management System", 
      deployedLink: "#", 
      githubLink: "https://github.com/jaguarvusal/cms.git",
      image: "/src/assets/cms.jpg" 
    },
    { 
      title: "Vehicle Maker", 
      deployedLink: "#", 
      githubLink: "https://github.com/jaguarvusal/Vehicle-Maker",
      image: "/src/assets/vehicle.jpg" 
    },
    { 
      title: "README Generator", 
      deployedLink: "#", 
      githubLink: "https://github.com/jaguarvusal/README-Generator",
      image: "/src/assets/readme.jpg" 
    },
    { 
      title: "React Portfolio", 
      deployedLink: "https://vusalcodingportfolio.netlify.app/", 
      githubLink: "https://github.com/jaguarvusal/React-Portfolio",
      image: "/src/assets/portfolio.jpg" 
    }
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
