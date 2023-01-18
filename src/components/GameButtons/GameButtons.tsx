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
    ":hover": {
      backgroundColor: "#787600",
    },
    fontFamily: `"Titan One", cursive`,
  }) as typeof Button;

  function handleStartButton() {
    startGame();
    setTimerActive(true);
  }

  function handleStopTimer() {
    setTimerActive(false);
  }

  return (
    <Stack spacing={2} direction="row" className="btn-container">
      <CustomButton variant="contained" onClick={handleStartButton}>
        Start
      </CustomButton>
      <CustomButton variant="contained">Reset</CustomButton>
      {/* <button>More Time</button> */}
    </Stack>
  );
}
