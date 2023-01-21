import React, { Dispatch, SetStateAction } from "react";
import "./Directions.css";
import GameButtons from "../GameButtons/GameButtons";
import {
  Button,
  Card,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  startGame: () => void;
  timerActive: boolean;
  setTimerActive: Dispatch<SetStateAction<boolean>>;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
  resetGame: () => void;
}

export default function Directions({
  startGame,
  timerActive,
  setTimerActive,
  timer,
  setTimer,
  resetGame,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const CustomButton = styled(Button)({
    backgroundColor: "#dad806",
    ":hover": {
      backgroundColor: "#787600",
    },
    textShadow: "0 0 5px black",
    fontFamily: `"Titan One", cursive`,
  }) as typeof Button;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* <Container sx={{padding: "1rem 0"}}>
        <GameButtons
          startGame={startGame}
          timerActive={timerActive}
          setTimerActive={setTimerActive}
          timer={timer}
          setTimer={setTimer}
          resetGame={resetGame}
        />
      </Container> */}
      <div className="directions-container">
        <CustomButton
          sx={{ display: { xs: "block", sm: "none", md: "none" } }}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          How to Play
        </CustomButton>
        <Popover
          id={id}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <List dense={false} sx={{ backgroundColor: "#003054" }}>
            <ListItem sx={{ padding: "0 16px" }}>
              <ListItemText
                sx={{ padding: "0", color: "white" }}
                primary="Choose two cards to compare"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{ padding: "0", color: "white" }}
                primary="If the two cards match, they will be removed from the board"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{ padding: "0", color: "white" }}
                primary="If the two cards do not match, they will flip over and remain on the board"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{ padding: "0", color: "white" }}
                primary="Try to match all the cards before time runs out"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{ padding: "0", color: "white" }}
                primary="You have 25 seconds to complete the game"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{ padding: "0", color: "white" }}
                primary="Time will start once you click the start button"
              />
            </ListItem>
          </List>
        </Popover>
        {/* visible on larger screen */}
        <Container
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Card
            sx={{
              backgroundColor: "#003054",
            }}
          >
            <Typography
              variant="h4"
              className="title-secondary"
              sx={{ fontFamily: `"Titan One", cursive` }}
            >
              How to Play
            </Typography>
            <List dense={false}>
              <ListItem sx={{ padding: "0 16px" }}>
                <ListItemText
                  sx={{ padding: "0", color: "white" }}
                  primary="Choose two cards to compare"
                />
              </ListItem>
              <ListItem sx={{ padding: "0 16px" }}>
                <ListItemText
                  sx={{ padding: "0", color: "white" }}
                  primary="If the two cards match, they will be removed from the board"
                />
              </ListItem>
              <ListItem sx={{ padding: "0 16px" }}>
                <ListItemText
                  sx={{ padding: "0", color: "white" }}
                  primary="If the two cards do not match, they will flip over and remain on the board"
                />
              </ListItem>
              <ListItem sx={{ padding: "0 16px" }}>
                <ListItemText
                  sx={{ padding: "0", color: "white" }}
                  primary="Try to match all the cards before time runs out"
                />
              </ListItem>
              <ListItem sx={{ padding: "0 16px" }}>
                <ListItemText
                  sx={{ padding: "0", color: "white" }}
                  primary="You have 25 seconds to complete the game"
                />
              </ListItem>
              <ListItem sx={{ padding: "0 16px" }}>
                <ListItemText
                  sx={{ padding: "0", color: "white" }}
                  primary="Time will start once you click the start button"
                />
              </ListItem>
            </List>
          </Card>
        </Container>
      </div>
      <Container sx={{ padding: "1rem 0" }}>
        <GameButtons
          startGame={startGame}
          timerActive={timerActive}
          setTimerActive={setTimerActive}
          timer={timer}
          setTimer={setTimer}
          resetGame={resetGame}
        />
      </Container>
    </div>
  );
}

// <div>
//   <h2 className="title-secondary">How to Play</h2>
//   <ul>
//     <li>Choose two cards to compare</li>
//     <li>If the two cards match, they will be removed from the board</li>
//     <li>
//       If the two cards do not match, they will flip over and remain on the
//       board
//     </li>
//     <li>Try to match all the cards before time runs out</li>
//     <li>You have 25 seconds to complete the game</li>
//     <li>Time will start once you click the start button</li>
//   </ul>
//   <GameButtons
//     startGame={startGame}
//     timerActive={timerActive}
//     setTimerActive={setTimerActive}
//     timer={timer}
//     setTimer={setTimer}
//     resetGame={resetGame}
//     // startBtnActive={startBtnActive}
//     // setStartBtnActive={setStartBtnActive}
//   />
// </div>
// export default function SimpleAccordion() {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }
