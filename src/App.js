import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HlineCards from "./components/HlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
