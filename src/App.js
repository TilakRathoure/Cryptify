import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Exchange from "./components/Exchange";
import Coins from "./components/Coins";
import Coindetails from "./components/Coindetails";

const App = () => {
  return (
    <Router basename="/Cryptify">
      <div className="flex min-h-screen flex-col bg-cryptify-bg">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/coin/:id" element={<Coindetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
