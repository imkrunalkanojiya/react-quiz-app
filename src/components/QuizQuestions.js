import React, { useState, useContext } from "react";

// context api
import { QuizContext } from "../QuizContext";

// array of questions
import { QuizData } from "../data/QuizData";

const QuizQuestions = () => {
  //  score context
  const { setQuizState, quizScore, setQuizScore } = useContext(QuizContext);

  // current Question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //  Current Question logic
  const [selectOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // next question logic
  const handleNextQuestion = () => {
    if (QuizData[currentQuestion].answer === selectOption) {
      setQuizScore(quizScore + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  //  finsh quiz logic
  const handleFinshQuiz = () => {
    if (QuizData[currentQuestion].answer === selectOption) {
      setQuizScore(quizScore + 1);
    }
    setQuizState("score");
  };

  console.log(selectOption);

  return (
    <div id="app-quiz">
      <form>
        <h3 className="question">{QuizData[currentQuestion].question}</h3>
        <div className="options">
          <p>Select your answer</p>
          <input
            type="radio"
            name="option"
            id="option-1"
            value={QuizData[currentQuestion].optionA}
            onChange={handleOptionChange}
            checked={selectOption === QuizData[currentQuestion].optionA}
          />
          <label htmlFor="option-1">{QuizData[currentQuestion].optionA}</label>
          <br />

          <input
            type="radio"
            name="option"
            id="option-2"
            value={QuizData[currentQuestion].optionB}
            onChange={handleOptionChange}
            checked={selectOption === QuizData[currentQuestion].optionB}
          />
          <label htmlFor="option-2">{QuizData[currentQuestion].optionB}</label>
          <br />

          <input
            type="radio"
            name="option"
            id="option-3"
            value={QuizData[currentQuestion].optionC}
            onChange={handleOptionChange}
            checked={selectOption === QuizData[currentQuestion].optionC}
          />
          <label htmlFor="option-3">{QuizData[currentQuestion].optionC}</label>
          <br />

          <input
            type="radio"
            name="option"
            id="option-4"
            value={QuizData[currentQuestion].optionD}
            onChange={handleOptionChange}
            checked={selectOption === QuizData[currentQuestion].optionD}
          />
          <label htmlFor="option-4">{QuizData[currentQuestion].optionD}</label>
          <br />
        </div>
      </form>
      {currentQuestion === QuizData.length - 1 ? (
        <div className="finsh-question">
          <button className="finish" onClick={handleFinshQuiz}>
            Finsh Quiz
          </button>
        </div>
      ) : (
        <div className="next-question">
          <button className="next" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizQuestions;
