import React from "react";
import Card from "../Cards/Card";

interface Props {
  cards: string[];
}

export default function GameBoard({ cards }: Props) {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card card={card} key={card} />
      ))}
    </div>
  );
}
