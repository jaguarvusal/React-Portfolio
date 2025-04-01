import React from "react";
import Navigation from "./Navigation.jsx";

const Header = ({ setCurrentPage, currentPage }) => {
  return (
    <header>
      <h1>Vusal</h1>
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </header>
  );
};

export default Header;
