import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartQuiz from "./screens/start-quiz.jsx";
import PlayQuiz from "./screens/play-quiz.jsx";
import { QuizProvider } from "./context/QuizContext.jsx";

function App() {
  return (
    <main className="container font-work-sans">
      <QuizProvider>
        <Router>
          <Routes>
            <Route path="/play-quiz" element={<PlayQuiz />} />
            <Route path="/" element={<StartQuiz />} />
          </Routes>
        </Router>
      </QuizProvider>
    </main>
  );
}

export default App;
