import { useState, useEffect } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start Timer
  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
      setIntervalId(id);
    }
  };

  // Stop Timer
  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // Reset Timer
  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setTimer(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;
