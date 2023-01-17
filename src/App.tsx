import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";
import GameBoard from "./components/GameBoard/GameBoard";
import { PlayingCard } from "./types";
import Timer from "./components/Timer/Timer";

function App() {
  const [activeCards, setActiveCards] = useState<PlayingCard[]>([]);
  const [gameSize, setGameSize] = useState(12);
  const [flipCount, setFlipCount] = useState(0);
  const [flippedCards, setFlippedCards] = useState<PlayingCard[]>([]); // holds 2 active cards for comparison
  const [matches, setMatches] = useState(0);
  const [noMatchFlip, setNoMatchFlip] = useState(0);
  const [foundPairs, setFoundPairs] = useState<string[]>([]);
  const [timer, setTimer] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [gameOverStatus, setGameOverStatus] = useState(false);

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

  function handleStartButton() {}

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

  function trackFlippedCards(card: PlayingCard) {
    setFlippedCards((prev: PlayingCard[]) => [...prev, card]);
  }
  //create card matching function

  function matchCheck() {
    setTimeout(() => {
      if (flippedCards[0].name === flippedCards[1].name) {
        setMatches((prev) => prev + 1);
        setFoundPairs((prev) => [...prev, flippedCards[0].name]);
        console.log("match count", matches);
      } else {
        setNoMatchFlip((prev) => prev + 1);
        console.log("no match counter", noMatchFlip);
      }
      console.log(flippedCards);
      //re-enable flipping here
      setFlipCount(0);
    }, 800);
    setFlippedCards([]);
  }

  flippedCards.length === 2 && matchCheck();

  //maybe add paired cards array to keep matched cards hidden

  //ADD RESET CARDS FUNCTION/INITIATOR

  function resetGame() {}

  //create win function

  function winGame() {
    setTimerActive(false);
    //stop timer
    //display modal
  }

  //create lose function

  //maybe gameOverStatus and TimerActive serve same purpose?
  function gameOver() {
    setGameOverStatus(true);
    //turn all cards over
    //disable all cards
    //display modal
  }

  //TODO double clicking on one card removes its pair
  //stop timer when all cards matched
  //why flipping disabled when 2 seconds left? - because i setTimerActive(false) at 1 second left

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
          flippedCards={flippedCards}
          trackFlips={trackFlippedCards}
          noMatchFlip={noMatchFlip}
          foundPairs={foundPairs}
          flipCount={flipCount}
          setFlipCount={setFlipCount}
          timerActive={timerActive}
        />
      </div>
    </div>
  );
}

export default App;
