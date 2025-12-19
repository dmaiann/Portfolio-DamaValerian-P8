import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar.jsx";
import Home from "./page/Home.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
