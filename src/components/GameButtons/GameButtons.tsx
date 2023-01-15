import React, { Dispatch, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

interface Props {
  shuffleCards: () => void;
  setTimerActive: Dispatch<SetStateAction<boolean>>;
}

export default function GameButtons({ shuffleCards, setTimerActive }: Props) {
  const CustomButton = styled(Button)({
    backgroundColor: "#dad806",
  }) as typeof Button;

  function handleStartButton() {
    shuffleCards();
    setTimerActive(true);
  }

  return (
    <Stack spacing={2} direction="row" className="btn-container">
      <CustomButton variant="contained" onClick={handleStartButton}>
        Start
      </CustomButton>
      <CustomButton variant="contained">Reset</CustomButton>
      <CustomButton onClick={() => setTimerActive(false)}>
        Stop Timer
      </CustomButton>
      {/* <button>More Time</button> */}
    </Stack>
  );
}
