import React from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

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
