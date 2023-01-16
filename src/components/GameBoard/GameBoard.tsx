import React, { Dispatch, SetStateAction } from "react";
import "./GameBoard.css";
import Card from "../Cards/PlayingCard";
import { PlayingCard } from "../../types";
import { Grid } from "@mui/material";

interface Props {
  cards: PlayingCard[];
  trackFlips: (name: string) => void;
  noMatchFlip: number;
  foundPairs: string[];
  flipCount: number;
  setFlipCount: Dispatch<SetStateAction<number>>;
}
export default function GameBoard({
  cards,
  trackFlips,
  noMatchFlip,
  foundPairs,
  flipCount,
  setFlipCount,
}: Props) {
  return (
    <Grid container spacing={2} className="game-board">
      {cards.map((card) => (
        <Grid item xs={4} sm={4} md={3} lg={2} key={card.id}>
          {/* only okay to use index as key when not modifying layout of objects */}
          <Card
            card={card}
            trackFlips={trackFlips}
            noMatchFlip={noMatchFlip}
            foundPairs={foundPairs}
            flipCount={flipCount}
            setFlipCount={setFlipCount}
          />
        </Grid>
      ))}
    </Grid>
  );
}
