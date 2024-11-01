import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import Score from "./Score";
import Timer from "./Timer";
import Confetti from 'react-confetti';

import winSoundFile from "../assets/win.mp3";
import loseSoundFile from "../assets/lose.mp3";
import clickSoundFile from "../assets/click.mp3";

/**
 * Props for the Quiz component.
 */
type QuizProps = {
  questions: {
    question: string;
    options: string[];
    correctAnswers: string[];
    difficulty: string;
  }[];
  initialSkips: number;
  initialTime: number;
  mode: string;
  colors?: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
};

/**
 * Main quiz component handling the quiz flow, score tracking, and timing.
 * @param questions - Array of question objects with text, options, correct answers, and difficulty.
 * @param initialSkips - Initial number of skips allowed for the quiz.
 * @param initialTime - Initial time in seconds allocated for the quiz.
 * @param mode - Mode of the quiz that may affect quiz behavior (e.g., "asian" for immediate fail on wrong answer).
 * @param colors - Theme colors for the quiz UI.
 */
const Quiz: React.FC<QuizProps> = ({
  questions,
  initialSkips,
  initialTime,
  mode,
  colors = {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#4CAF50",
    quaternary: "#F44336",
  },
}) => {
  const [shuffledQuestions] = useState(
    [...questions].sort(() => Math.random() - 0.5)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [skips, setSkips] = useState(initialSkips);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOver(true);
    }
  }, [timeLeft]);


  /**
   * Handles answer selection by checking correctness and updating the score or ending the game based on mode.
   * @param selectedAnswer - The answer selected by the user.
   */
  const handleAnswer = (selectedAnswer: string) => {
    if (isGameOver || isWinner) return;

    const isCorrect =
      shuffledQuestions[currentQuestion].correctAnswers.includes(selectedAnswer);

    // Play click sound on answer selection
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();

    if (!isCorrect && mode === "asian") {
      const loseSound = new Audio(loseSoundFile);
      loseSound.play();
      setIsGameOver(true);
      return;
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 >= shuffledQuestions.length) {
      const winSound = new Audio(winSoundFile);
      winSound.play();
      setIsWinner(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setSkips(initialSkips);
    setCurrentQuestion(0);
    setTimeLeft(initialTime);
    setIsGameOver(false);
    setIsWinner(false);
  };

  const handleHome = () => {
    navigate("/");
  };

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen"
        style={{ backgroundColor: colors.quaternary }}>
        <h1 className="text-6xl font-extrabold mb-4" style={{ color: colors.primary }}>❌ Game Over</h1>
        <p className="text-2xl" style={{ color: colors.primary }}>Your Score: {score}</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleRestart}
            className="bg-blue-400 border-2 border-blue-400 hover:scale-95 text-white py-2 px-4 rounded-xl shadow-md transition duration-300 hover:bg-blue-500 mr-4"
          >
            Restart
          </button>
          <button
            onClick={handleHome}
            className="bg-neutral-500 border-2 border-neutral-500 hover:scale-95 text-white py-2 px-4 rounded-xl shadow-md transition duration-300 hover:bg-neutral-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (isWinner) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen"
        style={{ backgroundColor: colors.quaternary }}>
        <Confetti />
        <h1 className="text-6xl font-extrabold mb-4" style={{ color: colors.primary }}>
          🐔 Winner Winner Chicken Dinner!
        </h1>
        <p className="text-2xl" style={{ color: colors.primary }}>
          You answered {score} questions correctly!
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleRestart}
            className="bg-blue-400 border-2 border-blue-400 hover:scale-95 text-white py-2 px-4 rounded-xl shadow-md transition duration-300 hover:bg-blue-500 mr-4"
          >
            Restart
          </button>
          <button
            onClick={handleHome}
            className="bg-neutral-500 border-2 border-neutral-500 hover:scale-95 text-white py-2 px-4 rounded-xl shadow-md transition duration-300 hover:bg-neutral-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6"
      style={{ backgroundColor: colors.quaternary }}>
      <h1 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>{mode} Mode Quiz</h1>
      <div className="w-full max-w-lg p-8 shadow-lg rounded-xl"
        style={{ backgroundColor: colors.secondary }}>
        <Timer
          duration={timeLeft}
          onTimeUp={() => setIsGameOver(true)}
          setTimeLeft={setTimeLeft}
        />
        <p className="text-center text-lg font-semibold mb-4" style={{ color: colors.primary }}>
          Question {currentQuestion + 1}/{shuffledQuestions.length}
        </p>
        <Score score={score} skips={skips} />
        <Question
          questionData={shuffledQuestions[currentQuestion]}
          onAnswer={(answer) => {
            handleAnswer(answer);
          }}
          onSkip={() => {
            if (skips > 0) {
              setSkips(skips - 1);
              setCurrentQuestion((prev) => (prev + 1 >= shuffledQuestions.length ? prev : prev + 1));
            }
          }}
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              if (skips > 0) {
                const clickSound = new Audio(clickSoundFile);
                clickSound.play();
                setSkips(skips - 1);
                setCurrentQuestion((prev) =>
                  prev + 1 >= shuffledQuestions.length ? prev : prev + 1
                );
              }
            }}
            className={`py-2 px-4 rounded-xl shadow-md transition duration-300 ${skips === 0 ? "bg-neutral-900 opacity-50" : "bg-red-600 hover:bg-green-500"
              } text-white`}
            disabled={skips === 0}
          >
            Skip Question ({skips})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
