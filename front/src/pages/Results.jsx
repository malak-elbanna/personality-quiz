import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useLocation, useNavigate } from "react-router-dom";
import ChartDataLabels from "chartjs-plugin-datalabels";

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

  let quizId = location.state?.quizId;

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
        backgroundColor: [
          "#BB6FF0", "#FFB6C1", "#FFEB8D", "#A0D8FF", "#A8E6A1"
        ],
        borderWidth: 0,
      },
    ],
  };

  const handleRetake = () => {
    if (quizId) {
      localStorage.removeItem(`${quizId}_completed`);
      localStorage.removeItem(`${quizId}_answers`);
      navigate(`/quiz/${quizId.replace(/\D/g, "")}`);
    } else {
      console.error("Quiz ID is missing. Unable to retake quiz.");
    }
  };

  return (
   <div className="min-h-screen bg-white py-16 px-16 mt-20 md:mt-20 sm:mt-24 flex flex-col justify-center items-center">
  <div className="text-3xl md:text-5xl font-extrabold text-purple-700 mb-8 text-center md:text-left">
  <h1>Your Quiz Results</h1>
  <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto mt-6 md:mt-8">
    <Doughnut data={data} />
  </div>
</div>



      <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-gray-500 to-yellow-500 text-transparent bg-clip-text mb-8 mt-8 text-center">
        Your main trait is:

      </h1>
      <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-500 to-blue-500 text-transparent bg-clip-text mb-6 mt-8 text-center">
          {biggestTrait.charAt(0).toUpperCase() + biggestTrait.slice(1)}
      </h1>

      <div className="py-8 px-4 md:px-12 mb-12 bg-white rounded-lg shadow-lg">
        <p className="text-sm md:text-xl text-purple-900 font-semibold leading-7">
          Openness: <span className="font-bold text-purple-700">{percentage.openness}%</span> <br />
          Neuroticism: <span className="font-bold text-purple-700">{percentage.neuroticism}%</span> <br />
          Agreeableness: <span className="font-bold text-purple-700">{percentage.agreeableness}%</span> <br />
          Extraversion: <span className="font-bold text-purple-700">{percentage.extraversion}%</span> <br />
          Conscientiousness: <span className="font-bold text-purple-700">{percentage.conscientiousness}%</span>.
        </p>
      </div>

      <div className="flex justify-center md:justify-start">
        <button
          className="px-6 py-2 md:px-8 md:py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
          onClick={handleRetake}
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
