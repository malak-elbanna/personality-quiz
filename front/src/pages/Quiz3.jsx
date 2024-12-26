import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Quiz3JSON from "../data/quiz3.json";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Quiz3 = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    setQuiz(Quiz3JSON);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        {quiz.map((question) => (
          <QuestionCard key={question.number} quest={question} />
        ))}
        <div className="flex justify-center mb-8">
          <button className="mt-4 px-20 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105">
            <Link to="/success">Submit</Link>
          </button>
        </div>
        </div>
      <div className="bg-gray-50">
        <Footer />
      </div>
    </div>
  )
}

export default Quiz3