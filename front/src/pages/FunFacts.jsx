import React from 'react';
import Navbar from '../components/Navbar';

const FunFacts = () => {
  const funFacts = [
    {
      trait: 'Openness',
      facts: [
        'Openness is associated with creativity and curiosity.',
        'People high in Openness tend to enjoy art and new experiences.',
        'It’s linked to imagination and open-mindedness.'
      ]
    },
    {
      trait: 'Conscientiousness',
      facts: [
        'Conscientious individuals are usually organized and dependable.',
        'This trait is strongly related to success in school and work.',
        'Low conscientiousness can lead to procrastination.'
      ]
    },
    {
      trait: 'Extraversion',
      facts: [
        'Extroverts gain energy from social interactions.',
        'High Extraversion is associated with talkativeness and assertiveness.',
        'Introverts (low Extraversion) enjoy solitude and smaller social settings.'
      ]
    },
    {
      trait: 'Agreeableness',
      facts: [
        'Agreeable people tend to be kind, empathetic, and cooperative.',
        'Low Agreeableness may be linked to competitiveness or skepticism.',
        'It’s closely tied to interpersonal relationships and trust.'
      ]
    },
    {
      trait: 'Neuroticism',
      facts: [
        'Neuroticism is linked to emotional instability and mood swings.',
        'High Neuroticism can make someone more prone to stress and anxiety.',
        'People with low Neuroticism are often calm and emotionally resilient.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-12 px-6 text-center w-full mt-20">
        <h1 className="text-4xl font-bold mb-4">Fun Facts</h1>
        <p className="text-lg font-light">
        Fun Facts About the Big Five Personality Traits
        </p>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {funFacts.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-bold text-purple-800 mb-4">
                  {item.trait}
                </h2>
                <ul className="list-disc pl-6 text-left">
                  {item.facts.map((fact, factIndex) => (
                    <li key={factIndex} className="text-gray-700 mb-2">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  );
};

export default FunFacts;
