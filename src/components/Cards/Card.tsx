import React from "react";

interface Props {
  card: string;
}

export default function Card({ card }: Props) {
  const imgPath = `../../images/${card}`;

  return (
    <div className="card">
      <p>Card</p>
      <img src={process.env.PUBLIC_URL + card} alt="" />
    </div>
  );
}
