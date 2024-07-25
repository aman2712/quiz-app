import React from "react";

const Question = ({ question }) => {
  const options = ["A", "B", "C", "D"];
  return (
    <div>
      <h1 className="font-black font-teko text-5xl">{question.question}</h1>
      <div className="grid grid-cols-2 pt-6 px-8 ml-2 gap-x-12">
        {question.options.map((option, index) => (
          <button key={index} className="option w-96">
            <p className="">{option}</p>
            <span className="absolute -top-5 -left-5 w-14 h-14 bg-custom-blue rounded-tl-3xl border border-black rounded-br-3xl font-light text-3xl text-white flex justify-center items-center">
              {options[index]}
            </span>
          </button>
        ))}
      </div>
      <div className="flex justify-between px-10 mt-6">
        <button className="text-lg w-56 rounded-tl-button rounded-br-button py-3 option">
          LAST QUESTION
        </button>
        <button className="text-lg w-56 rounded-tl-button rounded-br-button py-3 option">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Question;
