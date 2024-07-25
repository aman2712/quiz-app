import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import Question from "../components/question";

const PlayQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { questions } = useContext(QuizContext);
  return (
    <div className="page">
      <Question question={questions[currentQuestion]} />
    </div>
  );
};

export default PlayQuiz;
