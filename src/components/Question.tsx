import React, { useEffect, useState } from "react";

const clickSound = new Audio(require("../assets/click.mp3"));

type QuestionProps = {
  questionData: {
    question: string;
    options: string[];
    correctAnswers: string[];
  };
  onAnswer: (selectedAnswer: string) => void;
  onSkip: () => void;
};

const shuffleArray = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
    setShuffledOptions(shuffleArray([...questionData.options]));
    setSelectedAnswer(null);
    setIsFading(false); // Animation bei neuer Frage zurücksetzen
  }, [questionData]);

  const handleAnswerClick = (option: string) => {
    clickSound.play(); // Spiele Sound bei Klick
    setSelectedAnswer(option);
    setIsFading(true); // Startet das Fade-Out
    setTimeout(() => {
      onAnswer(option); // Antwort übergeben, wenn die Animation endet
      setIsFading(false); // Setzt für die neue Frage das Fade-In zurück
    }, 500); // Zeit für das Fade-Out (500 ms)
  };

  return (
    <div
      className={`flex flex-col items-center transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
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
          clickSound.play(); // Spiele Sound bei Skip
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
