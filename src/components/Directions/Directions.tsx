import React from "react";
import GameButtons from "../GameButtons/GameButtons";

export default function Directions() {
  return (
    <div>
      <h2>How to Play</h2>
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
      <GameButtons />
    </div>
  );
}
