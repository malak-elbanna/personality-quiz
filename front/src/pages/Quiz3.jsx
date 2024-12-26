import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Quiz3JSON from "../data/quiz3.json";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Quiz3 = () => {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setQuiz(Quiz3JSON);
  }, []);

  const handleAnswer = (questionNumber, answer) => {
    setAnswers((prev) => ({ ...prev, [questionNumber]: answer }));
    setError("");
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== quiz.length) {
      setError("Please answer all questions before submitting.");
    } else {
      navigate("/success");
    }
  };
  const progress = (Object.keys(answers).length / quiz.length) * 100;

  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-500 min-h-screen flex flex-col">
      <Navbar />
      <div className="sticky top-[64px] z-50 bg-white bg-opacity-90 shadow-md py-2">
        <div className="w-10/12 mx-auto bg-gray-200 rounded-full h-6">
          <div
            className="bg-purple-700 h-6 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="pt-20">
          {quiz.map((question) => (
            <QuestionCard
              key={question.number}
              quest={question}
              onAnswer={(answer) => handleAnswer(question.number, answer)}
            />
          ))}
        </div>
        {error && (
          <div className="text-center text-white font-semibold mt-4">
            {error}
          </div>
        )}

        <div className="flex justify-center mb-8">
          <button
            className="mt-4 px-20 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="bg-gray-50">
        <Footer />
      </div>
    </div>
  );
};

export default Quiz3;
