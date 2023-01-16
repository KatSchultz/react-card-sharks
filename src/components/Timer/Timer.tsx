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
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  }, [timer, timerActive]);

  if (timer === 1) setTimerActive(false);

  return <h2>{timer}</h2>;
}
