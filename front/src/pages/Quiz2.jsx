import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Quiz2JSON from "../data/quiz2.json";

const Quiz2 = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    setQuiz(Quiz2JSON);
  }, []);

  return (
    <div>
      {quiz.map((question) => (
        <QuestionCard key={question.number} quest={question} />
      ))}
    </div>
  )
}

export default Quiz2