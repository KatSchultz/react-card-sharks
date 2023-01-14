import React, { useState } from "react";
import "./PlayingCard.css";
import { PlayingCard } from "../../types";
import Paper from "@mui/material/Paper";

interface Props {
  card: PlayingCard;
  trackFlips: (name: string) => void;
}

export default function Card({ card, trackFlips }: Props) {
  const [cardRevealed, setCardRevealed] = useState(false);
  const frontOfCard = "/images/frontOfCard.png";

  function clickHandler() {
    setCardRevealed(true);
    trackFlips(card.name);
  }

  return (
    <Paper elevation={3} className="playing-card" onClick={clickHandler}>
      {!cardRevealed && (
        <img
          src={process.env.PUBLIC_URL + frontOfCard}
          alt="unknown"
          className="fish-img"
        />
      )}
      {cardRevealed && (
        <img
          src={process.env.PUBLIC_URL + card.image}
          alt={card.name}
          className="fish-img"
        />
      )}
    </Paper>
  );
}
