import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Diary from "./pages/Diary";
import List from "./pages/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/globalstyles";
import HabitTracker from "./pages/HabitTracker";

const App = () => {
  return (
    <Router>
      <GlobalStyles /> 
      <Header />
      <div style={{ marginBottom: "30px" }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/list" element={<List />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/habittracker" element={<HabitTracker />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
