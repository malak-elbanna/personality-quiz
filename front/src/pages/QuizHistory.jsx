import React, { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
import quizzes from "../data/quizzes.json";
import AnswerModal from "../components/AnswerModal";
import { useNavigate } from "react-router-dom";

const QuizHistory = () => {
  const [history, setHistory] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    const quiz1Answers = JSON.parse(localStorage.getItem("quiz1_answers"));
    const quiz2Answers = JSON.parse(localStorage.getItem("quiz2_answers"));
    const quiz3Answers = JSON.parse(localStorage.getItem("quiz3_answers"));

    const historyData = [];
    if (quiz1Answers) historyData.push({ ...quizzes.find(q => q.id === 1), answers: quiz1Answers });
    if (quiz2Answers) historyData.push({ ...quizzes.find(q => q.id === 2), answers: quiz2Answers });
    if (quiz3Answers) historyData.push({ ...quizzes.find(q => q.id === 3), answers: quiz3Answers });

    setHistory(historyData);
  }, []);

  const handleReview = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleCloseModal = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center w-full">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-12 px-6 text-center w-full mt-20">
        <h1 className="text-4xl font-bold mb-4">Quiz History</h1>
        <p className="text-lg font-light">
          Review your past quiz attempts
        </p>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1 w-full flex flex-col items-center">
        {history.length === 0 ? (
          <p className="text-gray-600">No quiz history found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {history.map((item) => (
              <QuizCard key={item.id} quiz={item} buttonText="Review Your Answers" onButtonClick={() => handleReview(item)} />
            ))}
          </div>
        )}
      </main>

      {selectedQuiz && <AnswerModal quiz={selectedQuiz} onClose={handleCloseModal} />}
    </div>
  );
};

export default QuizHistory;