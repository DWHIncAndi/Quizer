import React from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "./Tooltip";

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#262626] via-[#78716c] to-[#475569] p-4">
      <h1 className="text-5xl font-extrabold mb-12 text-white text-center">
        Select Quiz Mode
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {[
          { mode: "easy", time: "8 min", skips: "10", questions: "20", color: "lime-600" },
          { mode: "normal", time: "5 min", skips: "5", questions: "40", color: "amber-600" },
          { mode: "hard", time: "5 min", skips: "3", questions: "80", color: "red-600" },
          { mode: "hardcore", time: "8 min", skips: "5", questions: "125", color: "red-900" },
          { mode: "asian", time: "30s", skips: "0", questions: "1", color: "red-950" },
        ].map(({ mode, time, skips, questions, color }) => (
          <Tooltip delay={800} fontSize="text-md" key={mode} content={`Time: ${time}, Skips: ${skips}, Questions: ${questions}`}>
            <button
              onClick={() => navigate(`/game/${mode}`)}
              className={`bg-zinc-600 text-zinc-200 py-10 px-12 text-xl rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-${color} w-full`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default StartPage;