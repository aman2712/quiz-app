import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StartQuiz = () => {
  return (
    <div className="page">
      <h1 className="font-teko text-7xl font-black">
        Attempt the Ultimate History Quiz
      </h1>
      <Link className="btn mt-2" to="/play-quiz">
        Start Now <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default StartQuiz;
