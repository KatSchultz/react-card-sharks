import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./PlayingCard.css";
import { PlayingCard } from "../../types";
import Paper, { paperClasses } from "@mui/material/Paper";
import styled from "@emotion/styled";

interface Props {
  card: PlayingCard;
  trackFlips: (name: string) => void;
  flippedCards: string[];
  noMatchFlip: number;
  setNoMatchFlip: Dispatch<SetStateAction<number>>;
  foundPairs: string[];
}

export default function Card({
  card,
  trackFlips,
  noMatchFlip,
  setNoMatchFlip,
  flippedCards,
  foundPairs,
}: Props) {
  const [cardRevealed, setCardRevealed] = useState(false);
  const [clickable, setClickable] = useState(true);
  const [alreadyMatched, setAlreadyMatched] = useState(false);
  const frontOfCard = "/images/frontOfCard.png";
  const hiddenClass = alreadyMatched ? "hidden" : "";
  const animateFlip = cardRevealed ? " flip" : "";
  const animateFlipOver = cardRevealed ? "" : " flip";

  //flips mismatched cards back over
  useEffect(() => {
    resetCards();

    console.log(noMatchFlip);
  }, [noMatchFlip]);

  //remove matching cards from board
  useEffect(() => {
    if (foundPairs.includes(card.name)) {
      setAlreadyMatched(true);
    }
  }, [card.name, foundPairs]);
  console.log(alreadyMatched);

  const CustomPaper = styled(Paper)({
    background: "transparent",
  }) as typeof Paper;

  function clickHandler() {
    setCardRevealed(true);
    setClickable(false);
    trackFlips(card.name);
  }

  function resetCards() {
    console.log("reset cards called");
    setCardRevealed(false);
    setClickable(true);
  }

  return (
    <Paper
      elevation={1}
      sx={{
        background: "transparent",
      }}
      className={"playing-card " + hiddenClass + animateFlip}
      onClick={clickable ? clickHandler : () => {}}
    >
      <div className="card-faces">
        <div className="card-front face">
          <img
            src={process.env.PUBLIC_URL + frontOfCard}
            alt="unknown"
            className="fish-img"
          />
        </div>
        <div className="card-back face">
          <img
            src={process.env.PUBLIC_URL + card.image}
            alt={card.name}
            className="fish-img"
          />
        </div>

        {/* {!cardRevealed && (
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
      )} */}
      </div>
    </Paper>
  );
}
