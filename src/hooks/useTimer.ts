import { useEffect, useState } from 'react';

const useTimer = (duration: number, onTimeUp: () => void) => {
   const [timeLeft, setTimeLeft] = useState(duration);

   useEffect(() => {
      if (timeLeft === 0) {
         onTimeUp();
         return;
      }

      const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timerId);
   }, [timeLeft, onTimeUp]);

   const resetTimer = () => setTimeLeft(duration);

   return { timeLeft, resetTimer };
};

export default useTimer;
