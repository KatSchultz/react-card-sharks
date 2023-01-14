import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";
import GameBoard from "./components/GameBoard/GameBoard";
import { PlayingCard } from "./types";

function App() {
  const [activeCards, setActiveCards] = useState<PlayingCard[]>([]);
  const [gameSize, setGameSize] = useState(16);
  const [flippedCards, setFlippedCards] = useState([]);

  const [matches, setMatches] = useState(0);

  const cards = [
    { uniqueKey: 0, name: "stingray", image: "/images/img-0.png" },
    { uniqueKey: 1, name: "blue hippo tang", image: "/images/img-1.png" },
    { uniqueKey: 2, name: "clownfish", image: "/images/img-2.png" },
    { uniqueKey: 3, name: "octopus", image: "/images/img-3.png" },
    { uniqueKey: 4, name: "sea turtle", image: "/images/img-4.png" },
    { uniqueKey: 5, name: "whale shark", image: "/images/img-5.png" },
    { uniqueKey: 6, name: "great white shark", image: "/images/img-6.png" },
    { uniqueKey: 7, name: "squid", image: "/images/img-7.png" },
    { uniqueKey: 8, name: "orca", image: "/images/img-8.png" },
    { uniqueKey: 9, name: "crab", image: "/images/img-9.png" },
    { uniqueKey: 10, name: "seahorse", image: "/images/img-10.png" },
  ];

  //create shuffle cards function
  function shuffleCards() {
    const halfCards = gameSize / 2;
    const singleCardArray = cards.slice(0, halfCards);
    const doubleCardArray = singleCardArray.concat(singleCardArray);
    console.log(doubleCardArray);
    const randomArray = [];
    for (let i = 0; i < gameSize; i++) {
      let randomIndex = Math.floor(Math.random() * gameSize);
      randomArray.push(doubleCardArray[randomIndex]);
      doubleCardArray.splice(randomIndex, 1);
    }

    //NEED TO ADD UNIQUE ID TO CARDS FOR KEYS

    // console.log(randomArray);
    setActiveCards(randomArray);
  }
  // shuffleCards();

  //create timer function
  //create card matching function
  function matchCheck() {
    if (flippedCards[0] === flippedCards[1]) {
      setMatches((prev) => prev + 1);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Directions shuffleCards={shuffleCards} />
        <GameBoard cards={activeCards} />
      </div>
    </div>
  );
}

export default App;
