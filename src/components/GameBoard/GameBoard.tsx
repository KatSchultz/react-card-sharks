import React from "react";
import "./GameBoard.css";
import Card from "../Cards/Card";
import { PlayingCard } from "../../types";

interface Props {
  cards: PlayingCard[];
}

export default function GameBoard({ cards }: Props) {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card card={card} key={card.name} />
      ))}
    </div>
  );
}
