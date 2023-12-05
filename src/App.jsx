import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import CardDetails from "./Pages/Details/CardDetails";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Home Page" />} />
          <Route
            path="/product/:productId"
            element={<CardDetails title="Check out our new" />}
          />
          <Route
            path="/about-us"
            element={<About title="Lets know each other" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
