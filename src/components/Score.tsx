import React from 'react';

type ScoreProps = {
   score: number;
   skips: number;
};

const Score: React.FC<ScoreProps> = ({ score, skips }) => (
   <div className="flex justify-between text-lg font-semibold text-gray-700 mb-4">
      <p>Score: <span className="text-green-500">{score}</span></p>
      <p>Skips left: <span className="text-red-500">{skips}</span></p>
   </div>
);

export default Score;
