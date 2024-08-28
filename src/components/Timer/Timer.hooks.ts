import { useState, useRef } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
    mSec: 0,
  });

  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  const startTimer = () => {
    const startTime = Date.now() - elapsedTime;

    const updateTimer = () => {
      const newElapsedTime = Date.now() - startTime;
      setElapsedTime(newElapsedTime);

      const min = Math.floor(newElapsedTime / 60000);
      const sec = Math.floor((newElapsedTime % 60000) / 1000);
      const mSec = Math.floor(newElapsedTime % 1000);

      setTime({
        min,
        sec,
        mSec,
      });

      animationFrameId.current = requestAnimationFrame(updateTimer);
    };

    if (isRunning) {
      setIsRunning(false);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    } else {
      setIsRunning(true);
      animationFrameId.current = requestAnimationFrame(updateTimer);
    }
  };

  const resetTimer = () => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    setIsRunning(false);
    setElapsedTime(0);
    setTime({
      min: 0,
      sec: 0,
      mSec: 0,
    });
  };

  return {
    startTimer,
    resetTimer,
    time,
  };
};
