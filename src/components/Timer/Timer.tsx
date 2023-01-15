import React, { Dispatch, SetStateAction, useEffect } from "react";
interface Props {
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
  timerActive: boolean;
}

export default function Timer({ timer, setTimer, timerActive }: Props) {
  useEffect(() => {
    if (timerActive) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  }, [timer, timerActive]);

  return <h2>{timer}</h2>;
}
