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
}) => {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const options = shuffle([...questionData.options]);
    setShuffledOptions(options);
    setSelectedAnswer(null);
    setIsFading(false);
  }, [questionData]);

  const handleAnswerClick = (option: string) => {
    if (selectedAnswer) return;

    clickSound.play();
    setSelectedAnswer(option);
    setIsFading(true);

    setTimeout(() => {
      onAnswer(option);
      setIsFading(false);
    }, 500);
  };

  const getButtonClass = (option: string) => {
    const isCorrect = questionData.correctAnswers.includes(option);
    const isSelected = option === selectedAnswer;

    if (isSelected) {
      return isCorrect ? "bg-green-400" : "bg-red-400";
    }
    return "bg-blue-400 hover:bg-blue-500 hover:scale-95 border-2 border-blue-400";
  };

  return (
    <div className={`flex flex-col items-center transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
      <h2 className="text-xl font-medium mb-6 text-zinc-100">{questionData.question}</h2>
      <div className="grid grid-cols-2 gap-2 mb-4 w-full max-w-lg">
        {shuffledOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerClick(option)}
            className={`text-white py-2 px-4 rounded-xl transition-all duration-200 ease-in-out ${getButtonClass(option)}`}
            disabled={!!selectedAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
