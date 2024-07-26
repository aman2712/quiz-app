import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Question from "../components/question";
import Progress from "../components/progress";

const PlayQuiz = () => {
  const { questions, currentQuestion } = useContext(QuizContext);
  return (
    <div className="page">
      <Progress />
      <Question question={questions[currentQuestion]} />
    </div>
  );
};

export default PlayQuiz;
