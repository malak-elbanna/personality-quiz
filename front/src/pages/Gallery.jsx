
import { useEffect, useState } from 'react';
import QuoteCard from '../components/QuoteCard';

const Gallery = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const quotesPerSlide = 3;

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'DOp1U6TOWo0RYmjqczs/nw==qAug3rxykcbiZZ45',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data) {
          const existingQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
          const updatedQuotes = [...existingQuotes, ...data];
          localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
          setQuotes(updatedQuotes);
        }
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    const loadQuotes = () => {
      const savedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
      setQuotes(savedQuotes);
    };

    loadQuotes();
    fetchQuotes();
  }, []);

  const totalSlides = Math.ceil(quotes.length / quotesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideQuotes = () => {
    const startIndex = currentSlide * quotesPerSlide;
    return quotes.slice(startIndex, startIndex + quotesPerSlide);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center w-full">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-12 px-6 text-center w-full mt-20">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-lg font-light">Explore our collection of inspiring quotes</p>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1 w-full flex flex-col items-center">
        <div className="relative w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-300">
            {getCurrentSlideQuotes().map((quote, index) => (
              <QuoteCard key={index} quote={quote.quote} author={quote.author} />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-600 transition"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-600 transition"
          >
            
          </button>
        </div>
        <div className="mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full mx-1 ${
                index === currentSlide ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
