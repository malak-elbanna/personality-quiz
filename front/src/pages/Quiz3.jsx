import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Quiz3JSON from "../data/quiz3.json";

const Quiz3 = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    setQuiz(Quiz3JSON);
  }, []);

  return (
    <div>
      {quiz.map((question) => (
        <QuestionCard key={question.number} quest={question} />
      ))}
    </div>
  )
}

export default Quiz3