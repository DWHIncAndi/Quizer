import React, { useEffect, useState } from "react";

type TimerProps = {
  duration: number;
  onTimeUp: () => void;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp, setTimeLeft }) => {
  const [timeLeft, internalSetTimeLeft] = useState(duration);

  useEffect(() => {
    internalSetTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(
      () => internalSetTimeLeft((prevTime) => prevTime - 1),
      1000
    );
    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  useEffect(() => {
    setTimeLeft(timeLeft);
  }, [timeLeft, setTimeLeft]);

  // Formatierungsfunktion für Minuten und Sekunden
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}:${secs < 10 ? "0" : ""}${secs}` : `${secs}s`;
  };

  return (
    <div className="text-lg font-bold text-blue-600 mb-4">
      Time Left: {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;


// TODO: backround von StartPage soll uber all sein
// TODO: Winner Winner Chicken Dinner animation
// TODO: Game Over animation
// TODO: Settings mit sounds, farben
// TODO: Achievements
// TODO: Easter Egg
// TODO: Event (Halloween, Christmas, New Year, Easter, and more.... )
