import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects"; // Added Projects Page
import "./App.css"; // Ensure smooth scrolling effect
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} /> {/* Added Projects Route */}
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;
