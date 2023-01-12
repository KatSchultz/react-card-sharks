import React from "react";
import "./Card.css";
import { PlayingCard } from "../../types";

interface Props {
  card: PlayingCard;
}

export default function Card({ card }: Props) {
  const imgPath = `../../images/${card}`;

  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + card.image}
        alt={card.name}
        className="fish-img"
      />
    </div>
  );
}
