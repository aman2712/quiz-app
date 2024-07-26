import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Progress = () => {
  const { currentQuestion } = useContext(QuizContext);
  const questioNumbers = [1, 2, 3, 4];
  const marginTopValues = ["5rem", "12.5rem", "20rem", "100%"];
  return (
    <div className="absolute left-0 top-0 h-screen bg-gray-200 w-8 -z-10">
      <div
        className="bg-custom-blue w-full absolute z-0 transition-all duration-300"
        style={{
          height: `calc(${marginTopValues[currentQuestion]} + 2.5rem)`,
        }}
      ></div>
      {questioNumbers.map((number) => (
        <div
          key={number}
          className={`flex justify-center items-center w-10 h-10 rounded-full ml-3 mt-20 z-20 sticky transition-all duration-300 ${
            number - 1 <= currentQuestion
              ? "bg-custom-blue text-white"
              : "bg-gray-200"
          }`}
        >
          <p className="p-2 bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center text-black font-semibold">
            {number}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Progress;
