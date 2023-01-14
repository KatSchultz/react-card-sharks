import React, { Dispatch, SetStateAction } from "react";
import "./GameBoard.css";
import Card from "../Cards/PlayingCard";
import { PlayingCard } from "../../types";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Grid } from "@mui/material";

interface Props {
  cards: PlayingCard[];
  trackFlips: (name: string) => void;
  flippedCards: string[];
  noMatchFlip: number;
  setNoMatchFlip: Dispatch<SetStateAction<number>>;
  foundPairs: string[];
}

export default function GameBoard({
  cards,
  trackFlips,
  noMatchFlip,
  setNoMatchFlip,
  flippedCards,
  foundPairs,
}: Props) {
  return (
    <Grid container spacing={2} className="game-board">
      {cards.map((card, index) => (
        <Grid item xs={4} sm={4} md={3} lg={2} key={index}>
          {/* only okay to use index as key when not modifying layout of objects */}
          <Card
            card={card}
            trackFlips={trackFlips}
            flippedCards={flippedCards}
            noMatchFlip={noMatchFlip}
            setNoMatchFlip={setNoMatchFlip}
            foundPairs={foundPairs}
          />
        </Grid>
      ))}
    </Grid>
  );
}
