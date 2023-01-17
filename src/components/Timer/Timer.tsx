import React, { Dispatch, SetStateAction, useEffect } from "react";
interface Props {
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
  timerActive: boolean;
  setTimerActive: Dispatch<SetStateAction<boolean>>;
}

export default function Timer({
  timer,
  setTimer,
  timerActive,
  setTimerActive,
}: Props) {
  useEffect(() => {
    if (timerActive) {
      setTimeout(() => {
        updateTimer();
      }, 1000);
    }
  }, [timer, timerActive]);

  function updateTimer() {
    if (timer > 0) {
      setTimer((prev) => prev - 1);
    } else {
      setTimerActive(false);
    }
  }

  return <h2>{timer}</h2>;
}
