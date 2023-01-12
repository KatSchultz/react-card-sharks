import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  const cards = [
    { name: "stingray", image: "/images/img-0.png" },
    { name: "blue hippo tang", image: "/images/img-1.png" },
    { name: "clownfish", image: "/images/img-2.png" },
    { name: "octopus", image: "/images/img-3.png" },
    { name: "sea turtle", image: "/images/img-4.png" },
    { name: "whale shark", image: "/images/img-5.png" },
    { name: "great white shark", image: "/images/img-6.png" },
    { name: "squid", image: "/images/img-7.png" },
    { name: "orca", image: "/images/img-8.png" },
    { name: "crab", image: "/images/img-9.png" },
    { name: "seahorse", image: "/images/img-10.png" },
  ];

  //create shuffle function
  //create timer function

  return (
    <div className="App">
      <Header />
      <Directions />
      <GameBoard cards={cards} />
    </div>
  );
}

export default App;
