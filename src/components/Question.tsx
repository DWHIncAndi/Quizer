import React, { useEffect, useState } from "react";
import { shuffle } from "../utils/shuffle";
import clickSoundFile from "../assets/click.mp3";

const clickSound = new Audio(clickSoundFile);

type QuestionProps = {
  questionData: {
    question: string;
    options: string[];
    correctAnswers: string[];
  };
  onAnswer: (selectedAnswer: string) => void;
  onSkip: () => void;
};

const Question: React.FC<QuestionProps> = ({
  questionData,
  onAnswer,
  onSkip,
}) => {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setShuffledOptions(shuffle([...questionData.options]));
    setSelectedAnswer(null);
    setIsFading(false);
  }, [questionData]);

  const handleAnswerClick = (option: string) => {
    clickSound.play();
    setSelectedAnswer(option);
    setIsFading(true);
    setTimeout(() => {
      onAnswer(option);
      setIsFading(false);
    }, 500);
  };

  return (
    <div
      className={`flex flex-col items-center transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"
        }`}
    >
      <h2 className="text-xl font-medium mb-6 text-gray-800">
        {questionData.question}
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {shuffledOptions.map((option) => {
          const isCorrect = questionData.correctAnswers.includes(option);
          const isSelected = option === selectedAnswer;
          const buttonColor = selectedAnswer
            ? isCorrect
              ? "bg-green-500"
              : isSelected
                ? "bg-red-500"
                : "bg-red-500"
            : "bg-blue-500 hover:bg-blue-600";

          return (
            <button
              key={option}
              onClick={() => handleAnswerClick(option)}
              className={`${buttonColor} text-white py-2 px-4 rounded-lg`}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          clickSound.play();
          onSkip();
        }}
        className="text-red-500 underline hover:text-red-600"
      >
        Skip
      </button>
    </div>
  );
};

export default Question;