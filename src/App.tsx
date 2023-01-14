import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";
import GameBoard from "./components/GameBoard/GameBoard";
import { PlayingCard } from "./types";

function App() {
  const [activeCards, setActiveCards] = useState<PlayingCard[]>([]);
  const [gameSize, setGameSize] = useState(16);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matches, setMatches] = useState(0);

  const cards = [
    { name: "stingray", image: "/images/img-0.png" },
    { name: "stingray", image: "/images/img-0.png" },
    { name: "blue hippo tang", image: "/images/img-1.png" },
    { name: "blue hippo tang", image: "/images/img-1.png" },
    { name: "clownfish", image: "/images/img-2.png" },
    { name: "clownfish", image: "/images/img-2.png" },
    { name: "octopus", image: "/images/img-3.png" },
    { name: "octopus", image: "/images/img-3.png" },
    { name: "sea turtle", image: "/images/img-4.png" },
    { name: "sea turtle", image: "/images/img-4.png" },
    { name: "whale shark", image: "/images/img-5.png" },
    { name: "whale shark", image: "/images/img-5.png" },
    { name: "great white shark", image: "/images/img-6.png" },
    { name: "great white shark", image: "/images/img-6.png" },
    { name: "squid", image: "/images/img-7.png" },
    { name: "squid", image: "/images/img-7.png" },
    { name: "orca", image: "/images/img-8.png" },
    { name: "orca", image: "/images/img-8.png" },
    { name: "crab", image: "/images/img-9.png" },
    { name: "crab", image: "/images/img-9.png" },
    { name: "seahorse", image: "/images/img-10.png" },
    { name: "seahorse", image: "/images/img-10.png" },
  ];

  useEffect(() => {
    setActiveCards(cards.slice(0, gameSize));
  }, []);

  //create shuffle cards function
  function shuffleCards() {
    const firstHalfArray = cards.slice(0, gameSize);
    console.log("is it double printing");
    const shuffledArray = justShuffle(firstHalfArray);
    setActiveCards(shuffledArray);
  }

  function justShuffle(array: PlayingCard[]) {
    const clonedArray = array;
    const randomArray = [];
    for (let i = 0; i < gameSize; i++) {
      let randomIndex = Math.floor(Math.random() * clonedArray.length);
      randomArray.push(clonedArray[randomIndex]);
      clonedArray.splice(randomIndex, 1);
    }
    return randomArray;
  }

  //create card matching function

  function trackFlippedCards(name: string) {
    setFlippedCards((prev: string[]) => [...prev, name]);
  }

  function matchCheck() {
    if (flippedCards[0] === flippedCards[1]) {
      setMatches((prev) => prev + 1);
    }
    console.log(flippedCards);
    setFlippedCards([]);
  }

  flippedCards.length === 2 && matchCheck();

  //flip cards over if no match
  //remove cards if they do match

  //create timer function

  //create win function

  //create lose function

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Directions shuffleCards={shuffleCards} />
        <GameBoard cards={activeCards} trackFlips={trackFlippedCards} />
      </div>
    </div>
  );
}

export default App;
