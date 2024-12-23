import PropTypes from 'prop-types';

const QuizCard = ({ quiz }) => {
  const { title, description, estimatedTime, ageRange, image } = quiz;

  return (
    <div className="quiz-card bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl mb-4" />}
      <h2 className="text-2xl font-extrabold mb-3 text-purple-900">{title}</h2>
      <p className="text-gray-800 mb-3 text-sm leading-relaxed">{description}</p>
      
      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-semibold text-purple-800">Estimated Time:</span> {estimatedTime}
        </p>
        
        <p>
          <span className="font-semibold text-purple-800">Recommended Age:</span> {ageRange}
        </p>
      </div>

    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    estimatedTime: PropTypes.string.isRequired,
    ageRange: PropTypes.string.isRequired,
    image: PropTypes.string, 
  }).isRequired,
};

export default QuizCard;
