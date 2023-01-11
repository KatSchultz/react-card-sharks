import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  const cards = [
    "img-0.png",
    "img-1.png",
    "img-3.png",
    "img-4.png",
    "img-5.png",
    "img-6.png",
    "img-7.png",
    "img-8.png",
    "img-9.png",
    "img-10.png",
    "img-11.png",
    "img-12.png",
  ];
  return (
    <div className="App">
      <Header />
      <Directions />
      <GameBoard />
    </div>
  );
}

export default App;
