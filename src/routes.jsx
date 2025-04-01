import React from "react";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";

const Routes = ({ currentPage }) => {
  switch (currentPage) {
    case "Portfolio":
      return <Portfolio />;
    case "Contact":
      return <Contact />;
    case "Resume":
      return <Resume />;
    default:
      return <About />;
  }
};

export default Routes;
