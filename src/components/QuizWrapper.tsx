import React from "react";
import Quiz from "./Quiz";
import { Question } from "../data/questions";
import { shuffle } from "../utils/shuffle";

interface QuizWrapperProps {
  questions: Question[];
  mode: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
}

const QuizWrapper: React.FC<QuizWrapperProps> = ({
  questions,
  mode,
  colors,
}) => {
  let numQuestions = 0;
  let skips = 0;
  let timeLimit = 0;

  const formattedMode = mode.charAt(0).toUpperCase() + mode.slice(1);

  switch (formattedMode) {
    case "Easy":
      numQuestions = 20;
      skips = 10;
      timeLimit = 480;
      break;
    case "Normal":
      numQuestions = 40;
      skips = 5;
      timeLimit = 300;
      break;
    case "Hard":
      numQuestions = 80;
      skips = 3;
      timeLimit = 300;
      break;
    case "Hardcore":
      numQuestions = 125;
      skips = 5;
      timeLimit = 480;
      break;
    case "Asian":
      numQuestions = questions.filter(
        (q: Question) => q.difficulty === "asian"
      ).length;
      skips = 0;
      timeLimit = 30;
      break;
    default:
      break;
  }

  const filteredQuestions =
    mode === "asian"
      ? questions.filter((q: Question) => q.difficulty === "asian")
      : questions.slice(0, numQuestions);

  // Optional: Fragen mischen, falls notwendig
  const shuffledQuestions = shuffle(filteredQuestions);

  return (
    <Quiz
      questions={shuffledQuestions}
      initialSkips={skips}
      initialTime={timeLimit}
      colors={colors}
      mode={mode} // den Mode-Parameter an Quiz übergeben
    />
  );
};

export default QuizWrapper;
