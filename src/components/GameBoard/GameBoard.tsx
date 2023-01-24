import React, { Dispatch, SetStateAction } from "react";
import "./GameBoard.css";
import Card from "../Cards/PlayingCard";
import { PlayingCard } from "../../types";

interface Props {
  cards: PlayingCard[];
  flippedCards: PlayingCard[];
  trackFlips: (card: PlayingCard) => void;
  noMatchFlip: number;
  foundPairs: string[];
  flipCount: number;
  setFlipCount: Dispatch<SetStateAction<number>>;
  timerActive: boolean;
  gameCount: number;
  gameOver: boolean;
}
export default function GameBoard({
  cards,
  flippedCards,
  trackFlips,
  noMatchFlip,
  foundPairs,
  flipCount,
  setFlipCount,
  timerActive,
  gameCount,
  gameOver,
}: Props) {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          flippedCards={flippedCards}
          trackFlips={trackFlips}
          noMatchFlip={noMatchFlip}
          foundPairs={foundPairs}
          flipCount={flipCount}
          setFlipCount={setFlipCount}
          timerActive={timerActive}
          gameCount={gameCount}
          gameOver={gameOver}
        />
      ))}
    </div>
  );
}
