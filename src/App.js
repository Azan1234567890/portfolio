import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/project" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   
   </>
  );
}

export default App;
