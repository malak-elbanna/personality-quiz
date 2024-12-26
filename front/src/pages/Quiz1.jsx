import React, { useState, useEffect } from "react";
import QuizJSON1 from "../data/quiz1.json";
import QuestionCard from "../components/QuestionCard";

const Quiz1 = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    setQuiz(QuizJSON1);
  }, []);

  return (
    <div>
      {quiz.map((question) => (
        <QuestionCard key={question.number} quest={question} />
      ))}
    </div>
  )
}

export default Quiz1