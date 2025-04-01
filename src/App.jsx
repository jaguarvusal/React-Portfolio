import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Routes from "./Routes.jsx";
import "./style/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Routes currentPage={currentPage} />
      <Footer />
    </>
  );
}

export default App;
