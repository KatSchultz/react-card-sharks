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

  // function updateTimer() {
  //   setTimer((prev) => prev - 1);
  //   // second = Number(second) - 1;
  //   // timeDisplay.innerText = second;
  //   if (timer === 0) {
  //     clearInterval(startIntervalId);
  //     // gameOver();
  //   }
  // }

  // function countDown() {
  //   clearInterval(startIntervalId);
  //   startIntervalId = setInterval(updateTimer, 1200);
  // }

  // function resetTimer() {
  //   timeDisplay.innerText = 20;
  //   second = 20;
  //   pairCount = 0;
  //   countDown();
  // }

  // startTime.addEventListener(
  //   "click",
  //   () => {
  //     countDown();
  //     playBubbles();
  //     shuffleCards(shuffleArray, 12);
  //     cardFlipped.forEach((card) => {
  //       card.addEventListener("click", flipCard);
  //     });
  //   },
  //   {
  //     once: true,
  //   }
  // );

  // restart.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     resetTimer();
  //     shuffleCards(shuffleArray, 12);
  //     matchCount = 0;
  //     card1 = "";
  //     underTheSea.classList.remove("visible");
  //     victoryText.classList.remove("visible");
  //     cardFlipped.forEach((card) => {
  //       card.addEventListener("click", flipCard);
  //       card.classList.remove("flip");
  //       card.classList.remove("hidden");
  //     });
  //     underTheSea.classList.add("no-display");
  //     victoryText.classList.add("no-display");
  //   });
  // });

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
        <Timer timer={timer} setTimer={setTimer} timerActive={timerActive} />
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
