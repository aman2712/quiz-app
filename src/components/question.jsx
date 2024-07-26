import { useContext, useState, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import { FadeAnimation } from "../components/animation";

const Question = ({ question }) => {
  const [seconds, setSeconds] = useState(10);
  const options = ["A", "B", "C", "D"];
  const {
    nextQuestion,
    prevQuestion,
    currentQuestion,
    changeSelectedAnswer,
    submitQuiz,
  } = useContext(QuizContext);

  const navigate = useNavigate();

  function handleClick() {
    if (currentQuestion === 3) {
      submitQuiz();
      navigate("/end-quiz");
    } else {
      setSeconds(10);
      nextQuestion();
    }
  }

  function handlePrevious() {
    setSeconds(10);
    prevQuestion();
  }

  useEffect(() => {
    let interval = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setSeconds(10);
      changeSelectedAnswer("time-out");
      handleClick();
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <FadeAnimation>
      <div className="absolute -top-20 -right-48 bg-yellow-100 bg-opacity-50 p-3 rounded-xl">
        <p className="text-4xl font-bold">
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
      <div className="max-w-4xl">
        <h1 className="font-black font-teko text-5xl">{question.question}</h1>
        <div className="px-4">
          <div className="grid grid-cols-2 pt-6 ml-2 max-w-fit gap-x-24">
            {question.options.map((option, index) => (
              <button
                className="option w-96"
                key={index}
                onClick={() => {
                  changeSelectedAnswer(option);
                }}
              >
                <p>{option}</p>
                <span className="absolute -top-5 -left-5 w-14 h-14 bg-custom-blue rounded-tl-3xl border border-black rounded-br-3xl font-semibold text-3xl text-white flex justify-center items-center">
                  {options[index]}
                </span>
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            {currentQuestion > 0 ? (
              <button
                className="text-lg w-56 rounded-tl-button rounded-br-button py-3 option"
                onClick={handlePrevious}
              >
                LAST QUESTION
              </button>
            ) : (
              <div></div>
            )}
            <button
              className="text-lg w-56 rounded-tl-button rounded-br-button py-3 bg-white flex justify-center items-center p-5 my-4 font-teko font-extrabold relative cursor-pointer hover:bg-custom-blue transition duration-300 hover:text-white"
              onClick={handleClick}
            >
              {currentQuestion === 3 ? "SUBMIT" : "NEXT QUESTION"}
            </button>
          </div>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default Question;
