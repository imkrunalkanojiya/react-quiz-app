import React, { useState } from "react";
// context api
import { QuizContext } from "./QuizContext";

// components
import Welcome from "./components/Welcome";
import QuizQuestions from "./components/QuizQuestions";
import QuizScore from "./components/QuizScore";

const App = () => {
  // quiz initial screen
  const [quizState, setQuizState] = useState("welcome");

  // quiz initial score
  const [quizScore, setQuizScore] = useState(0);

  return (
    <div id="app-main">
      <div className="app-wrapper">
        <h1>React Quiz App</h1>
        <QuizContext.Provider
          value={{ quizState, setQuizState, quizScore, setQuizScore }}
        >
          {quizState === "welcome" && <Welcome />}
          {quizState === "questions" && <QuizQuestions />}
          {quizState === "score" && <QuizScore />}
        </QuizContext.Provider>
      </div>
    </div>
  );
};

export default App;
