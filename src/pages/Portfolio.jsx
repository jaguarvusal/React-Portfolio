import React from "react";
import Project from "../components/Project.jsx";

// Import images
import pizzaImage from "../assets/pizza.jpg";
import weatherImage from "../assets/weather.jpg";
import cmsImage from "../assets/cms.jpg";
import vehicleImage from "../assets/vehicle.jpg";
import readmeImage from "../assets/readme.jpg";
import portfolioImage from "../assets/portfolio.jpg";

const Portfolio = () => {
  const projects = [
    { 
      title: "Bootcamp Pizza Ordering Website", 
      deployedLink: "https://p1t1-group3.github.io/ProjectOne/", 
      githubLink: "https://github.com/p1t1-group3/ProjectOne",
      image: pizzaImage
    },
    { 
      title: "Weather Dashboard", 
      deployedLink: "https://weather-dashboard-application-y5xq.onrender.com/", 
      githubLink: "https://github.com/jaguarvusal/Weather-Dashboard-Application",
      image: weatherImage
    },
    { 
      title: "Content Management System", 
      deployedLink: "#", 
      githubLink: "https://github.com/jaguarvusal/cms.git",
      image: cmsImage
    },
    { 
      title: "Vehicle Maker", 
      deployedLink: "#", 
      githubLink: "https://github.com/jaguarvusal/Vehicle-Maker",
      image: vehicleImage
    },
    { 
      title: "README Generator", 
      deployedLink: "#", 
      githubLink: "https://github.com/jaguarvusal/README-Generator",
      image: readmeImage
    },
    { 
      title: "React Portfolio", 
      deployedLink: "https://vusalcodingportfolio.netlify.app/", 
      githubLink: "https://github.com/jaguarvusal/React-Portfolio",
      image: portfolioImage
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
