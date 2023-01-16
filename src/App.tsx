import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";
import GameBoard from "./components/GameBoard/GameBoard";
import { PlayingCard } from "./types";
import Timer from "./components/Timer/Timer";

function App() {
  const [activeCards, setActiveCards] = useState<PlayingCard[]>([]);
  const [gameSize, setGameSize] = useState(16);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matches, setMatches] = useState(0);
  const [noMatchFlip, setNoMatchFlip] = useState(0);
  const [foundPairs, setFoundPairs] = useState<string[]>([]);
  const [timer, setTimer] = useState(25);
  const [timerActive, setTimerActive] = useState(false);

  const cards = [
    { id: 1, name: "stingray", image: "/images/img-0.png" },
    { id: 2, name: "stingray", image: "/images/img-0.png" },
    { id: 3, name: "blue hippo tang", image: "/images/img-1.png" },
    { id: 4, name: "blue hippo tang", image: "/images/img-1.png" },
    { id: 5, name: "clownfish", image: "/images/img-2.png" },
    { id: 6, name: "clownfish", image: "/images/img-2.png" },
    { id: 7, name: "octopus", image: "/images/img-3.png" },
    { id: 8, name: "octopus", image: "/images/img-3.png" },
    { id: 9, name: "sea turtle", image: "/images/img-4.png" },
    { id: 10, name: "sea turtle", image: "/images/img-4.png" },
    { id: 11, name: "whale shark", image: "/images/img-5.png" },
    { id: 12, name: "whale shark", image: "/images/img-5.png" },
    { id: 13, name: "great white shark", image: "/images/img-6.png" },
    { id: 14, name: "great white shark", image: "/images/img-6.png" },
    { id: 15, name: "squid", image: "/images/img-7.png" },
    { id: 16, name: "squid", image: "/images/img-7.png" },
    { id: 17, name: "orca", image: "/images/img-8.png" },
    { id: 18, name: "orca", image: "/images/img-8.png" },
    { id: 19, name: "crab", image: "/images/img-9.png" },
    { id: 20, name: "crab", image: "/images/img-9.png" },
    { id: 21, name: "seahorse", image: "/images/img-10.png" },
    { id: 22, name: "seahorse", image: "/images/img-10.png" },
  ];

  useEffect(() => {
    setActiveCards(cards.slice(0, gameSize));
  }, []);

  //create shuffle cards function
  function shuffleCards() {
    setTimer(25);
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
    setTimeout(() => {
      if (flippedCards[0] === flippedCards[1]) {
        setMatches((prev) => prev + 1);
        setFoundPairs((prev) => [...prev, flippedCards[0]]);
        console.log("match count", matches);
      } else {
        setNoMatchFlip((prev) => prev + 1);
        console.log("no match counter", noMatchFlip);
      }
      console.log(flippedCards);
    }, 1000);
    setFlippedCards([]);
  }

  flippedCards.length === 2 && matchCheck();

  //maybe add paired cards array to keep matched cards hidden

  //ADD RESET CARDS FUNCTION/INITIATOR

  //create timer function

  //add IDs to cards

  //disable card flipping when two cards are showing

  //create win function

  //create lose function

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Directions
          shuffleCards={shuffleCards}
          setTimerActive={setTimerActive}
        />
        <Timer
          timer={timer}
          setTimer={setTimer}
          timerActive={timerActive}
          setTimerActive={setTimerActive}
        />
        <GameBoard
          cards={activeCards}
          trackFlips={trackFlippedCards}
          flippedCards={flippedCards}
          noMatchFlip={noMatchFlip}
          setNoMatchFlip={setNoMatchFlip}
          foundPairs={foundPairs}
        />
      </div>
    </div>
  );
}

export default App;
