import PropTypes from 'prop-types';
import quiz1 from '../data/quiz1.json';
import quiz2 from '../data/quiz2.json';
import quiz3 from '../data/quiz3.json';

const quizData = {
  1: quiz1,
  2: quiz2,
  3: quiz3,
};

const AnswerModal = ({ quiz, onClose }) => {
  const questions = quizData[quiz.id];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{quiz.title} - Your Answers</h2>

        <div className="overflow-y-auto max-h-96">
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{question.question}</h3>
              <p className="text-gray-700">Your answer: {quiz.answers[question.number]}</p>
            </div>
          ))}
        </div>

        <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

AnswerModal.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AnswerModal;