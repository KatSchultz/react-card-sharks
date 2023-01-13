import React from "react";
import "./GameBoard.css";
import Card from "../Cards/PlayingCard";
import { PlayingCard } from "../../types";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Grid } from "@mui/material";

interface Props {
  cards: PlayingCard[];
}

export default function GameBoard({ cards }: Props) {
  return (
    <Grid container spacing={2} className="game-board">
      {cards.map((card) => (
        <Grid item xs={4} sm={4} md={3} lg={2} key={card.name}>
          <Card card={card} />
        </Grid>
      ))}
    </Grid>
  );
}
