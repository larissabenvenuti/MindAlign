import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Diary from "./pages/Diary";
import List from "./pages/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
