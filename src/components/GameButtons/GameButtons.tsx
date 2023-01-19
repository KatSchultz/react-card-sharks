import React, { Dispatch, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Timer from "../Timer/Timer";

interface Props {
  startGame: () => void;
  timerActive: boolean;
  setTimerActive: Dispatch<SetStateAction<boolean>>;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
  resetGame: () => void;
}

export default function GameButtons({
  startGame,
  timerActive,
  setTimerActive,
  timer,
  setTimer,
  resetGame,
}: Props) {
  const CustomButton = styled(Button)({
    backgroundColor: "#dad806",
    ":hover": {
      backgroundColor: "#787600",
    },
    fontFamily: `"Titan One", cursive`,
  }) as typeof Button;

  function handleStartButton() {
    startGame();
    setTimerActive(true);
  }

  function handleResetButton() {
    resetGame();
  }

  return (
    <Stack
      spacing={3}
      direction="row"
      className="btn-container"
      alignItems="center"
      justifyContent="center"
    >
      <CustomButton variant="contained" onClick={handleStartButton}>
        Start
      </CustomButton>
      <CustomButton variant="contained" onClick={handleResetButton}>
        Reset
      </CustomButton>
      <div
        className="timer-holder"
        style={{ height: "36px", aspectRatio: "1/1" }}
      >
        <Timer
          timer={timer}
          setTimer={setTimer}
          timerActive={timerActive}
          setTimerActive={setTimerActive}
        />
      </div>
    </Stack>
  );
}
