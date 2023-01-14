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
  const tempCard: PlayingCard[] = [
    { uniqueKey: 0, name: "stingray", image: "/images/img-0.png" },
    { uniqueKey: 1, name: "blue hippo tang", image: "/images/img-1.png" },
    { uniqueKey: 2, name: "clownfish", image: "/images/img-2.png" },
  ];
  return (
    <Grid container spacing={2} className="game-board">
      {cards.map((card, index) => (
        <Grid item xs={4} sm={4} md={3} lg={2} key={index}>
          <Card card={card} />
        </Grid>
      ))}
    </Grid>
  );
}
