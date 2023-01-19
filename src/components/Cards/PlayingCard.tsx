import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./PlayingCard.css";
import { PlayingCard } from "../../types";
import Paper from "@mui/material/Paper";

interface Props {
  card: PlayingCard;
  flippedCards: PlayingCard[];
  trackFlips: (card: PlayingCard) => void; // add name of card to array to check for matching
  noMatchFlip: number; //increases when pair doesnt match, triggers flip cards face down again
  foundPairs: string[];
  flipCount: number;
  setFlipCount: Dispatch<SetStateAction<number>>;
  timerActive: boolean;
  win: boolean;
  gameOver: boolean;
}

export default function Card({
  card,
  flippedCards,
  trackFlips,
  noMatchFlip,
  foundPairs,
  flipCount,
  setFlipCount,
  timerActive,
  win,
  gameOver,
}: Props) {
  const [cardRevealed, setCardRevealed] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [alreadyMatched, setAlreadyMatched] = useState(false);
  const frontOfCard = "/images/frontOfCard.png";
  const hiddenClass = alreadyMatched ? "hidden" : "";
  const animateFlip = cardRevealed ? " flip" : "";

  //flips mismatched cards back over
  useEffect(() => {
    resetCards();
  }, [noMatchFlip, win, gameOver]);

  //remove matching cards from board
  useEffect(() => {
    if (foundPairs.includes(card.name)) {
      setAlreadyMatched(true);
    } else {
      //shows card face during flip on reset
      setAlreadyMatched(false);
    }
  }, [card.name, foundPairs]);

  //starting new game must setAlreadyMatched(false) on all cards

  //if two cards are showing, disable all cards from flipping
  useEffect(() => {
    if (flipCount < 2 && timerActive) {
      setClickable(true);

      if (flippedCards[0] && flippedCards[0].id === card.id) {
        setClickable(false); //prevents flipped card from matching with itself
      }
    } else {
      setClickable(false);
    }
  }, [flipCount, timerActive, flippedCards, card.id]);

  function clickHandler() {
    setCardRevealed(true);
    setClickable(false);
    trackFlips(card);
    setFlipCount((prev) => prev + 1);
  }

  function resetCards() {
    setCardRevealed(false);
    setClickable(true);
  }

  // if (timerActive) setClickable(true);

  return (
    <Paper
      elevation={1}
      sx={{
        background: "transparent",
        boxShadow: "none",
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
