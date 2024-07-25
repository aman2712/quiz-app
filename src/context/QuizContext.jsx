import { createContext, useState } from "react";
import quizQuestions from "../lib/quiz-questions.json";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(quizQuestions);
  const value = {
    questions,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
