import React, { useState, useEffect } from "react";
import Question from "./Question";
import Score from "./Score";
import Timer from "./Timer";

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
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
};

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

  useEffect(() => {
    if (timeLeft <= 0) setIsGameOver(true);
  }, [timeLeft]);

  const handleAnswer = (selectedAnswer: string) => {
    if (isGameOver || isWinner) return;
  const isCorrect =
    shuffledQuestions[currentQuestion].correctAnswers.includes(selectedAnswer);
  if (!isCorrect && mode === "asian") {
    setIsGameOver(true); // Game Over bei einer falschen Antwort in "Asian"
    return;
  }
    setScore(isCorrect ? score + 1 : score);
    if (currentQuestion + 1 >= shuffledQuestions.length) setIsWinner(true);
    else setCurrentQuestion(currentQuestion + 1);
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
        {/* Timer, Fortschritt und Skips */}
        <Timer
          duration={timeLeft}
          onTimeUp={() => setIsGameOver(true)}
          setTimeLeft={setTimeLeft}
        />
        <p className="text-center text-lg font-semibold mb-4">
          {/* Fortschrittszähler */}
          {currentQuestion + 1}/{shuffledQuestions.length}
        </p>
        <Score score={score} skips={skips} />
        <Question
          questionData={shuffledQuestions[currentQuestion]}
          onAnswer={handleAnswer}
          onSkip={() => {
            if (skips > 0) {
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
