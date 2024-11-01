// src/components/StartPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "./Tooltip";

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#262626] via-[#78716c] to-[#475569]">
      <h1 className="text-4xl font-bold mb-8 text-white">Select Quiz Mode</h1>

      <div className="grid grid-cols-2 gap-2">
        <Tooltip content="Time: 8 min, Skips: 10, Questions: 20">
          <button
            onClick={() => navigate("/game/easy")}
            className="bg-zinc-600 text-zinc-200 py-10 px-12 text-xl rounded-md shadow-md transition duration-200 hover:bg-lime-600 w-full"
          >
            Easy
          </button>
        </Tooltip>
        <Tooltip content="Time: 5 min, Skips: 5, Questions: 40">
          <button
            onClick={() => navigate("/game/normal")}
            className="bg-zinc-600 text-zinc-200 py-10 px-12 text-xl rounded-md shadow-md transition duration-200 hover:bg-amber-600 w-full"
          >
            Normal
          </button>
        </Tooltip>
        <Tooltip content="Time: 5 min, Skips: 3, Questions: 80">
          <button
            onClick={() => navigate("/game/hard")}
            className="bg-zinc-600 text-zinc-200 py-10 px-12 text-xl rounded-md shadow-md transition duration-200 hover:bg-red-600 w-full"
          >
            Hard
          </button>
        </Tooltip>
        <Tooltip content="Time: 8 min, Skips: 5, Questions: 125">
          <button
            onClick={() => navigate("/game/hardcore")}
            className="bg-zinc-600 text-zinc-200 py-10 px-12 text-xl rounded-md shadow-md transition duration-200 hover:bg-red-900 w-full"
          >
            Hardcore
          </button>
        </Tooltip>
        <Tooltip content="Time: 30s, No Skips, One Wrong Game Over">
          <button
            onClick={() => navigate("/game/asian")}
            className="bg-zinc-600 text-zinc-200 py-10 px-12 text-xl rounded-md shadow-md transition duration-200 hover:bg-red-950 w-full"
          >
            Asian
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default StartPage;
