import React, { Dispatch, SetStateAction } from "react";
import "./Directions.css";
import GameButtons from "../GameButtons/GameButtons";

interface Props {
  startGame: () => void;
  timerActive: boolean;
  setTimerActive: Dispatch<SetStateAction<boolean>>;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
  resetGame: () => void;
}

export default function Directions({
  startGame,
  timerActive,
  setTimerActive,
  timer,
  setTimer,
  resetGame,
}: Props) {
  return (
    <div>
      <h2 className="title-secondary">How to Play</h2>
      <ul>
        <li>Choose two cards to compare</li>
        <li>If the two cards match, they will be removed from the board</li>
        <li>
          If the two cards do not match, they will flip over and remain on the
          board
        </li>
        <li>Try to match all the cards before time runs out</li>
        <li>You have 25 seconds to complete the game</li>
        <li>Time will start once you click the start button</li>
      </ul>
      <GameButtons
        startGame={startGame}
        timerActive={timerActive}
        setTimerActive={setTimerActive}
        timer={timer}
        setTimer={setTimer}
        resetGame={resetGame}
        // startBtnActive={startBtnActive}
        // setStartBtnActive={setStartBtnActive}
      />
    </div>
  );
}
