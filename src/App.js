import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import InfoPage from "./InfoPage";
import HabitsPage from "./HabitsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Demo</Link>
          <Link to="/info">Info</Link>
          <Link to="/habits">Good Habits</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/habits" element={<HabitsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
