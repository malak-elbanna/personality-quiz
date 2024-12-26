import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const [users, setUsers] = useState(0);
  const [quizzesTaken, setQuizzesTaken] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const animateNumber = (targetValue, setValue) => {
      let current = 0;
      const increment = Math.ceil(targetValue / 100);
      const interval = setInterval(() => {
        if (current >= targetValue) {
          clearInterval(interval);
        } else {
          current += increment;
          setValue(current);
        }
      }, 10);
    };

    animateNumber(1500, setUsers);
    animateNumber(2000, setQuizzesTaken);
    animateNumber(95, setCompletionRate);
    animateNumber(4.8, setUserRating);
  }, []);

  return (
    <section className="flex justify-around space-x-10">
      <div className="text-center">
        <h4 className="text-3xl font-bold text-blue-600">{users}+</h4>
        <p className="text-gray-500">Users Registered</p>
      </div>
      <div className="text-center">
        <h4 className="text-3xl font-bold text-blue-600">{quizzesTaken}+</h4>
        <p className="text-gray-500">Quizzes Taken</p>
      </div>
      <div className="text-center">
        <h4 className="text-3xl font-bold text-blue-600">{completionRate}%</h4>
        <p className="text-gray-500">Quiz Completion Rate</p>
      </div>
      <div className="text-center">
        <h4 className="text-3xl font-bold text-blue-600">{userRating}</h4>
        <p className="text-gray-500">Average User Rating</p>
      </div>
    </section>
  );
};

export default Statistics;
