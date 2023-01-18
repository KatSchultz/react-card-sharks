import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

interface Props {
  modalDisplay: boolean;
  closeModal: () => void;
}

export default function Modal({ modalDisplay, closeModal }: Props) {
  return (
    <MuiModal
      open={modalDisplay}
      onClose={closeModal}
      aria-labelledby="modal-game-end"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={closeModal}>Close</Button>
        </Box>
      </div>
    </MuiModal>
  );
}
