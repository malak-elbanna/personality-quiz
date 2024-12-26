import PropTypes from 'prop-types';

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <span className="absolute top-2 left-2 text-purple-400 text-2xl font-bold">❝</span>
      <p className="text-xl italic text-gray-800 pl-6 font-serif">{quote}</p>
      <span className="absolute bottom-2 right-2 text-purple-400 text-2xl font-bold">❞</span>
      <p className="text-right mt-4 text-gray-600 font-semibold text-lg uppercase tracking-wide">- {author}</p>
    </div>
  );
};

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default QuoteCard;
