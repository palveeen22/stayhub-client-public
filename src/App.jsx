import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Promotion from "./components/Promotion";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Promotion />
      <Footer />
    </>
  );
}

export default App;
