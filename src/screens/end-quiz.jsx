import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EndQuiz = () => {
  const { score } = useContext(QuizContext);

  return (
    <div className="page">
      <h3 className="text-9xl font-black mb-10">{score}/40</h3>

      <h1 className="font-teko text-4xl font-semibold">
        Thank You for attempting the quiz
      </h1>
      <Link className="btn mt-5 text-lg" to="/">
        Back Home <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default EndQuiz;
