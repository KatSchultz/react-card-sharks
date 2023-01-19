import React, { Dispatch, SetStateAction } from "react";
import "./GameBoard.css";
import Card from "../Cards/PlayingCard";
import { PlayingCard } from "../../types";
import { Grid } from "@mui/material";

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
    <Grid container spacing={2} className="game-board">
      {cards.map((card) => (
        <Grid item xs={4} sm={4} md={3} lg={2} key={card.id}>
          {/* only okay to use index as key when not modifying layout of objects */}
          <Card
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
        </Grid>
      ))}
    </Grid>
  );
}
