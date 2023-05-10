import React, { useContext } from "react";

// context api
import { QuizContext } from "../QuizContext";

const QuizScore = () => {
  // get quiz score
  const { quizScore,setQuizState,setQuizScore } = useContext(QuizContext);

  // restart quiz
  const handleRestartQuiz = () => {
    setQuizState("welcome")
    setQuizScore(0)
  };

  return (
    <div id="app-score">
      <h3 className="score">Your Score is : {quizScore}</h3>
      <div className="restart-quiz">
        <button className="restart" onClick={handleRestartQuiz}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizScore;
