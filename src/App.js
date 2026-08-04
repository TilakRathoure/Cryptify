import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Exchanges from "./pages/Exchanges";
import Coins from "./pages/Coins";
import CoinDetails from "./pages/CoinDetails";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-cryptify-bg">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<Exchanges />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/coin/:id" element={<CoinDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
