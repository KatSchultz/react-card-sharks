import React from "react";
import "./PlayingCard.css";
import { PlayingCard } from "../../types";
import Paper from "@mui/material/Paper";

interface Props {
  card: PlayingCard;
}

export default function Card({ card }: Props) {
  return (
    <Paper elevation={3} className="playing-card">
      <img
        src={process.env.PUBLIC_URL + card.image}
        alt={card.name}
        className="fish-img"
      />
    </Paper>
  );
}
