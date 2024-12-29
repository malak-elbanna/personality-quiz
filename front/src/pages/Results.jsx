import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useLocation, useNavigate } from "react-router-dom";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const answerPoints = {
  a: { openness: 2, neuroticism: 1, agreeableness: 3, extraversion: 4, conscientiousness: 5 },
  b: { openness: 3, neuroticism: 2, agreeableness: 4, extraversion: 1, conscientiousness: 4 },
  c: { openness: 1, neuroticism: 3, agreeableness: 2, extraversion: 5, conscientiousness: 3 },
  d: { openness: 4, neuroticism: 1, agreeableness: 5, extraversion: 3, conscientiousness: 2 },
};

const Results = () => {
  const [percentage, setPercentage] = useState({
    openness: 0,
    neuroticism: 0,
    agreeableness: 0,
    extraversion: 0,
    conscientiousness: 0,
  });
  const [biggestTrait, setBiggestTrait] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let quizId = location.state?.quizId; // Try to get quizId from location.state

  // If quizId is not found in location.state, attempt to retrieve quizId from localStorage
  if (!quizId) {
    const availableQuizzes = ["quiz1", "quiz2", "quiz3"];
    for (let i = 0; i < availableQuizzes.length; i++) {
      if (localStorage.getItem(`${availableQuizzes[i]}_answers`)) {
        quizId = availableQuizzes[i];
        break;
      }
    }
  }

  useEffect(() => {
    if (!quizId) {
      console.error("Quiz ID is missing. Redirecting to home.");
      navigate("/");
      return;
    }

    const answers = JSON.parse(localStorage.getItem(`${quizId}_answers`)) || {};
    if (Object.keys(answers).length === 0) {
      console.warn("No answers found. Redirecting to home.");
      navigate("/");
      return;
    }

    // Calculate scores
    const totalScores = {
      openness: 0,
      neuroticism: 0,
      agreeableness: 0,
      extraversion: 0,
      conscientiousness: 0,
    };

    Object.values(answers).forEach((answer) => {
      const answerScore = answerPoints[answer];
      if (answerScore) {
        Object.keys(answerScore).forEach((trait) => {
          totalScores[trait] += answerScore[trait];
        });
      }
    });

    const totalScore = Object.values(totalScores).reduce((acc, score) => acc + score, 0);

    const percentages = Object.keys(totalScores).reduce((acc, trait) => {
      acc[trait] = Math.round((totalScores[trait] / totalScore) * 100);
      return acc;
    }, {});

    const sum = Object.values(percentages).reduce((acc, value) => acc + value, 0);
    const adjustedPercentages = Object.keys(percentages).reduce((acc, trait) => {
      acc[trait] = Math.round((percentages[trait] / sum) * 100);
      return acc;
    }, {});

    setPercentage(adjustedPercentages);

    // Determine the biggest trait
    const maxTrait = Object.keys(adjustedPercentages).reduce((max, trait) => {
      return adjustedPercentages[trait] > adjustedPercentages[max] ? trait : max;
    }, "openness");

    setBiggestTrait(maxTrait);
  }, [quizId, navigate]);

  const data = {
    labels: ["Openness", "Neuroticism", "Agreeableness", "Extraversion", "Conscientiousness"],
    datasets: [
      {
        data: [
          percentage.openness || 0,
          percentage.neuroticism || 0,
          percentage.agreeableness || 0,
          percentage.extraversion || 0,
          percentage.conscientiousness || 0,
        ],
        backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F1C40F"],
        borderWidth: 0,
      },
    ],
  };

  const handleRetake = () => {
    if (quizId) {
      // Clear stored data
      localStorage.removeItem(`${quizId}_completed`);
      localStorage.removeItem(`${quizId}_answers`);

      // Navigate to the corresponding quiz page
      navigate(`/quiz/${quizId.replace(/\D/g, "")}`); // Extract quiz number from quizId
    } else {
      console.error("Quiz ID is missing. Unable to retake quiz.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-12">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-6 text-left">Your Quiz Results</h1>
      <div className="w-96 h-96 mb-10 mx-auto rounded-lg">
        <Doughnut data={data} />
      </div>
      <h1 className="text-xl font-bold text-purple-600 mb-10 text-left">
        Your biggest trait is: {biggestTrait.charAt(0).toUpperCase() + biggestTrait.slice(1)}
      </h1>
      <div className="py-8 px-12 m-0">
        <p className="text-xl mb-8 text-purple-700 font-semibold text-left leading-8">
          <span className="block text-2xl font-bold mb-4">You answered:</span>
          Openness: <span className="font-bold text-purple-900">{percentage.openness}%</span> <br />
          Neuroticism: <span className="font-bold text-purple-900">{percentage.neuroticism}%</span> <br />
          Agreeableness: <span className="font-bold text-purple-900">{percentage.agreeableness}%</span> <br />
          Extraversion: <span className="font-bold text-purple-900">{percentage.extraversion}%</span> <br />
          Conscientiousness: <span className="font-bold text-purple-900">{percentage.conscientiousness}%</span>.
        </p>
      </div>
      <div className="flex justify-start mb-12">
        <button
          className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
          onClick={handleRetake}
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
