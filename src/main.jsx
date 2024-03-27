import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Debate from "./pages/Debate.jsx";
import Idea from "./pages/Idea.jsx";
import Speech from "./pages/Speech.jsx";
import Maze from "./pages/Maze.jsx";
import Poster from "./pages/Poster.jsx";
import Hunt from "./pages/Hunt.jsx";
import Puzzle from "./pages/Puzzle.jsx";

import "./index.css";
import "./styles/utils.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/debate" element={<Debate />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/maze" element={<Maze />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/hunt" element={<Hunt />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
