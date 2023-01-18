import React, { Dispatch, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

interface Props {
  startGame: () => void;
  setTimerActive: Dispatch<SetStateAction<boolean>>;
}

export default function GameButtons({ startGame, setTimerActive }: Props) {
  const CustomButton = styled(Button)({
    backgroundColor: "#dad806",
  }) as typeof Button;

  function handleStartButton() {
    startGame();
    setTimerActive(true);
  }

  function handleStopTimer() {
    console.log("stop timer activated");
    setTimerActive(false);
  }

  return (
    <Stack spacing={2} direction="row" className="btn-container">
      <CustomButton variant="contained" onClick={handleStartButton}>
        Start
      </CustomButton>
      <CustomButton variant="contained">Reset</CustomButton>
      <CustomButton onClick={handleStopTimer}>Stop Timer</CustomButton>
      {/* <button>More Time</button> */}
    </Stack>
  );
}
