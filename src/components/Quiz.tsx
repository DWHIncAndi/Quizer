import React, { useState, useEffect } from "react";
import Question from "./Question";
import Score from "./Score";
import Timer from "./Timer";

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
    primary?: string;
    secondary?: string;
    tertiary?: string;
    quaternary?: string;
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
  colors,
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

  const winSound = new Audio(winSoundFile);
  const loseSound = new Audio(loseSoundFile);
  const clickSound = new Audio(clickSoundFile);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOver(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isGameOver) {
      loseSound.play();
    } else if (isWinner) {
      winSound.play();
    }
    //eslint-disable-next-line
  }, [isGameOver, isWinner]);

  /**
   * Handles answer selection by checking correctness and updating the score or ending the game based on mode.
   * @param selectedAnswer - The answer selected by the user.
   */
  const handleAnswer = (selectedAnswer: string) => {
    if (isGameOver || isWinner) return;

    const isCorrect =
      shuffledQuestions[currentQuestion].correctAnswers.includes(selectedAnswer);

    if (!isCorrect && mode === "asian") {
      setIsGameOver(true);
      return;
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 >= shuffledQuestions.length) {
      setIsWinner(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">Game Over</h1>
        <p className="text-2xl">Your Score: {score}</p>
      </div>
    );
  }

  if (isWinner) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-extrabold text-green-600 mb-4">
          Winner Winner Chicken Dinner!
        </h1>
        <p className="text-2xl">You answered {score} questions correctly!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">{mode} Mode Quiz</h1>
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <Timer
          duration={timeLeft}
          onTimeUp={() => setIsGameOver(true)}
          setTimeLeft={setTimeLeft}
        />
        <p className="text-center text-lg font-semibold mb-4">
          {currentQuestion + 1}/{shuffledQuestions.length}
        </p>
        <Score score={score} skips={skips} />
        <Question
          questionData={shuffledQuestions[currentQuestion]}
          onAnswer={(answer) => {
            clickSound.volume = 0.3;
            clickSound.play();
            handleAnswer(answer);
          }}
          onSkip={() => {
            if (skips > 0) {
              clickSound.volume = 0.3;
              clickSound.play();
              setSkips(skips - 1);
              setCurrentQuestion((prev) =>
                prev + 1 >= shuffledQuestions.length ? prev : prev + 1
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default Quiz;
