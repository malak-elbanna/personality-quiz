import PropTypes from 'prop-types';

const QuestionCard = ({ quest, onAnswer }) => {
    const { number, question, a, b, c, d } = quest;
    const savedAnswer = JSON.parse(localStorage.getItem("quiz1_answers")) || {};
    console.log(savedAnswer);
    return (
        <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2l">
            <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">{number}. {question}</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <input 
                        type="radio" 
                        name={`question-${number}`} 
                        value="a" 
                        onChange={() => onAnswer('a')} 
                        id={`a-${number}`} 
                        className="mr-3 w-5 h-5 rounded-full border-2 border-gray-300 checked:border-purple-600 focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                    />
                    <label htmlFor={`a-${number}`} className="text-lg text-gray-800">{a}</label>
                </div>

                <div className="flex items-center">
                    <input 
                        type="radio" 
                        name={`question-${number}`} 
                        value="b" 
                        onChange={() => onAnswer('b')} 
                        id={`b-${number}`} 
                        className="mr-3 w-5 h-5 rounded-full border-2 border-gray-300 checked:border-purple-600 focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                    />
                    <label htmlFor={`b-${number}`} className="text-lg text-gray-800">{b}</label>
                </div>

                <div className="flex items-center">
                    <input 
                        type="radio" 
                        name={`question-${number}`} 
                        value="c" 
                        onChange={() => onAnswer('c')} 
                        id={`c-${number}`} 
                        className="mr-3 w-5 h-5 rounded-full border-2 border-gray-300 checked:border-purple-600 focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                    />
                    <label htmlFor={`c-${number}`} className="text-lg text-gray-800">{c}</label>
                </div>

                <div className="flex items-center">
                    <input 
                        type="radio" 
                        name={`question-${number}`} 
                        value="d" 
                        onChange={() => onAnswer('d')} 
                        id={`d-${number}`} 
                        className="mr-3 w-5 h-5 rounded-full border-2 border-gray-300 checked:border-purple-600 focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                    />
                    <label htmlFor={`d-${number}`} className="text-lg text-gray-800">{d}</label>
                </div>
            </div>
        </div>
    );
};

QuestionCard.propTypes = {
    quest: PropTypes.shape({
        number: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        a: PropTypes.string.isRequired,
        b: PropTypes.string.isRequired,
        c: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired, 
};

export default QuestionCard;
