import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quizId, setQuizId] = useState(null);

  useEffect(() => {
    let quizIdFromState = location.state?.quizId;

    if (!quizIdFromState) {
      const availableQuizzes = ["quiz1", "quiz2", "quiz3"];
      for (let i = 0; i < availableQuizzes.length; i++) {
        if (localStorage.getItem(`${availableQuizzes[i]}_answers`)) {
          quizIdFromState = availableQuizzes[i];
          break;
        }
      }
    }

    if (quizIdFromState) {
      setQuizId(quizIdFromState);
    } else {
      console.warn("Quiz ID is missing. Redirecting to home.");
      navigate("/");
    }
  }, [location.state, navigate]);

  const handleViewResults = () => {
    if (quizId) {
      navigate("/results", { state: { quizId } });
    } else {
      console.warn("Quiz ID is missing. Redirecting to results for quiz1.");
      navigate("/results", { state: { quizId: "quiz1" } }); 
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Quiz Submitted Successfully!</h1>
      <p className="text-lg mb-8">Congratulations! You have completed the quiz.</p>
      <div className="flex space-x-4">
        <button
          className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
          onClick={handleViewResults}
        >
          See your Results
        </button>
      </div>
    </div>
  );
};

export default Success;
