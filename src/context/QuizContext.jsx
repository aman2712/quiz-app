import { createContext, useEffect, useState } from "react";
import quizQuestions from "../lib/quiz-questions.json";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(quizQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion === 3) return;
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion === 0) return;
    setCurrentQuestion((prev) => prev - 1);
  };

  const changeSelectedAnswer = (answer) => {
    const question = questions[currentQuestion];
    question.selected_answer = answer;
    setQuestions((prev) => [...prev, question]);
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const value = {
    questions,
    currentQuestion,
    nextQuestion,
    prevQuestion,
    score,
    changeSelectedAnswer,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
