import { useContext, useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { QuizContext } from "../context/QuizContext";

export const FadeAnimation = ({ children }) => {
  const { currentQuestion } = useContext(QuizContext);

  const [fadeInVisible, fadeRef, triggerAnimation] = useAnimation();

  useEffect(() => {
    triggerAnimation();
  }, [currentQuestion]);

  return (
    <div>
      <div
        className={`fade-in ${fadeInVisible ? "show-animation" : ""}`}
        ref={fadeRef}
      >
        {children}
      </div>
    </div>
  );
};
