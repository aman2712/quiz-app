import { useContext, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import questionMark from "../assets/question-mark.png";

const StartQuiz = () => {
  const { setCurrentQuestion } = useContext(QuizContext);

  useEffect(() => {
    setCurrentQuestion(0);
  }, []);

  return (
    <div className="page">
      <img
        src={questionMark}
        alt="Question Mark | Vector"
        className="w-48  h-w-48  "
      />
      <h1 className="font-teko text-7xl font-black">
        The Ultimate History Quiz
      </h1>
      <Link
        className="btn mt-2 absolute bottom-14 right-20 hover:-translate-y-2"
        to="/play-quiz"
      >
        Start Now <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default StartQuiz;
