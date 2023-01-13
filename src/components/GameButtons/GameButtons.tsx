import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import createTheme from "@mui/material/styles";

import { styled } from "@mui/material/styles";

export default function GameButtons() {
  const CustomButton = styled(Button)({
    backgroundColor: "#dad806",
  }) as typeof Button;

  return (
    <Stack spacing={2} direction="row" className="btn-container">
      <CustomButton variant="contained">Start</CustomButton>
      <CustomButton variant="contained">Reset</CustomButton>
      {/* <button>More Time</button> */}
    </Stack>
  );
}
