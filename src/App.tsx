import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  const cards = [
    "/images/img-0.png",
    "/images/img-1.png",
    "/images/img-3.png",
    "/images/img-4.png",
    "/images/img-5.png",
    "/images/img-6.png",
    "/images/img-7.png",
    "/images/img-8.png",
    "/images/img-9.png",
    "/images/img-10.png",
    "/images/img-11.png",
    "/images/img-12.png",
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
