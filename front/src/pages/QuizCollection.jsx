import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import QuizCard from '../components/QuizCard';
import QuizJSON from '../data/quizzes.json';
import { useNavigate } from "react-router-dom";
import QuizHistory from './QuizHistory';

const QuizCollection = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setQuizzes(QuizJSON);
    setFilteredQuizzes(QuizJSON);
  }, []);

  useEffect(() => {
    const filtered = quizzes.filter(quiz =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredQuizzes(filtered);
  }, [searchQuery, quizzes]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center w-full">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-12 px-6 text-center w-full mt-20">
        <h1 className="text-4xl font-bold mb-4">Quiz Marketplace</h1>
        <p className="text-lg font-light">
          Discover and challenge yourself with our collection of engaging quizzes
        </p>

        <button
          className="mt-10 mb-6 px-20 py-3 bg-white text-indigo-500 font-semibold rounded-xl hover:bg-slate-100 hover:text-purple-500 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          onClick={() => navigate("/Quizhistory")}
        >
          View Quiz History
        </button>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1 w-full flex flex-col items-center">
        <div className="mb-6 flex items-center space-x-4 w-full">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Search quizzes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="p-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600">
            <Search size={20} />
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          Showing {filteredQuizzes.length} {filteredQuizzes.length === 1 ? 'quiz' : 'quizzes'}
        </p>

        {filteredQuizzes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {filteredQuizzes.map(quiz => (
              <QuizCard 
                key={quiz.id} 
                quiz={quiz} 
                onButtonClick={() => navigate(`/quiz/${quiz.id}`)} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-16">
            <Search className="text-gray-400 mb-4" size={48} />
            <p className="text-gray-500 text-lg font-light">
              No quizzes found
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizCollection;
