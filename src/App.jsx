import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";
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
