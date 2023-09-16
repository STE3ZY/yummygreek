import { useState } from "react";
import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-[#f1f0ed]">
      <Navbar />
      <RestaurantMenu />
    </div>
  );
}
export default App;
