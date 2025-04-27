import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Academics from "./Academics";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Home from "./Home"; // This will be your main resume page

function App() {
  const playAudio = () => {
    document.getElementById("audio").play();
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
