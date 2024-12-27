import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Quiz1JSON from "../data/quiz1.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Quiz1 = () => {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState(() => {
    return JSON.parse(localStorage.getItem("quiz1_answers")) || {};
  });
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(
    JSON.parse(localStorage.getItem("quiz1_completed")) || false
  );
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setQuiz(Quiz1JSON);
    if (hasCompletedQuiz) {
      navigate("/success", { state: { alreadyCompleted: true } });
    }
  }, [hasCompletedQuiz, navigate]);

  const handleAnswer = (questionNumber, answer) => {
    const updatedAnswers = { ...answers, [questionNumber]: answer };
    setAnswers(updatedAnswers);
    localStorage.setItem("quiz1_answers", JSON.stringify(updatedAnswers));
    setError("");
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== quiz.length) {
      setError("Please answer all questions before submitting.");
    } else {
      localStorage.setItem("quiz1_completed", JSON.stringify(true));
      navigate("/success");
    }
  };

  const handleRetake = () => {
    localStorage.removeItem("quiz1_answers");
    localStorage.removeItem("quiz1_completed");
    setAnswers({});
    setHasCompletedQuiz(false);
    setQuiz(Quiz1JSON);
  };

  const progress = (Object.keys(answers).length / quiz.length) * 100;

  return hasCompletedQuiz ? (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl font-bold mb-4">You already took this quiz!</h1>
      <p className="text-lg mb-8">Feel free to retake it if you'd like.</p>
      <button
        onClick={handleRetake}
        className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
      >
        Retake Quiz
      </button>
    </div>
  ) : (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col">
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

    </div>
  );
};

export default Quiz1;
