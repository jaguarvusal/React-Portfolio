import React from "react";

const Navigation = ({ setCurrentPage, currentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <ul>
        <li
          className={currentPage === "About" ? "active" : ""}
          onClick={() => handleNavigation("About")}
        >
          About Me
        </li>
        <li
          className={currentPage === "Portfolio" ? "active" : ""}
          onClick={() => handleNavigation("Portfolio")}
        >
          Portfolio
        </li>
        <li
          className={currentPage === "Contact" ? "active" : ""}
          onClick={() => handleNavigation("Contact")}
        >
          Contact
        </li>
        <li
          className={currentPage === "Resume" ? "active" : ""}
          onClick={() => handleNavigation("Resume")}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
