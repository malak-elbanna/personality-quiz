import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Success = () => {
const location = useLocation();
const navigate = useNavigate();

const handleRetake = () => {
    localStorage.removeItem("quiz1_answers");
    localStorage.removeItem("quiz1_completed");
    navigate("/quiz/1");
};

return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
            {location.state?.alreadyCompleted
                ? "You already completed this quiz!"
                : "Quiz Submitted Successfully!"}
        </h1>
        {location.state?.alreadyCompleted && (
            <p className="text-lg mb-8">Feel free to retake the quiz if you'd like.</p>
        )}
        <div className="flex space-x-4">
            <button
                onClick={handleRetake}
                className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
            >
                Retake Quiz
            </button>
            <button className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105">
                <Link to="/collection">Back to quizzes</Link>
            </button>
        </div>
    </div>
);
};

export default Success;
