import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Question = ({ question }) => {
  const options = ["A", "B", "C", "D"];
  const { nextQuestion, prevQuestion, currentQuestion, changeSelectedAnswer } =
    useContext(QuizContext);
  return (
    <div className="max-w-4xl">
      <h1 className="font-black font-teko text-5xl">{question.question}</h1>
      <div className="px-4">
        <div className="grid grid-cols-2 pt-6 ml-2 max-w-fit gap-x-24">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="option w-96"
              onClick={() => changeSelectedAnswer(option)}
            >
              <p className="">{option}</p>
              <span className="absolute -top-5 -left-5 w-14 h-14    bg-custom-blue rounded-tl-3xl border border-black rounded-br-3xl font-semibold text-3xl text-white flex justify-center items-center">
                {options[index]}
              </span>
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          {currentQuestion > 0 ? (
            <button
              className="text-lg w-56 rounded-tl-button rounded-br-button py-3 option"
              onClick={prevQuestion}
            >
              LAST QUESTION
            </button>
          ) : (
            <div></div>
          )}
          <button
            className="text-lg w-56 rounded-tl-button rounded-br-button py-3 option"
            onClick={nextQuestion}
          >
            {currentQuestion === 3 ? "SUBMIT" : "NEXT QUESTION"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
