import { createContext, useState } from "react";
import quizQuestions from "../lib/quiz-questions.json";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(quizQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion === 3) return;
    if (questions[currentQuestion].selected_answer === "") return;
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion === 0) return;
    setCurrentQuestion((prev) => prev - 1);
  };

  const changeSelectedAnswer = (answer) => {
    const question = questions[currentQuestion];
    question.selected_answer = answer;
    setQuestions(questions);
  };

  const submitQuiz = () => {
    questions.forEach((question) => {
      if (question.correct_option === question.selected_answer) {
        setScore((prev) => prev + 10);
      }
    });
  };

  const value = {
    questions,
    currentQuestion,
    setCurrentQuestion,
    nextQuestion,
    prevQuestion,
    score,
    changeSelectedAnswer,
    submitQuiz,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
