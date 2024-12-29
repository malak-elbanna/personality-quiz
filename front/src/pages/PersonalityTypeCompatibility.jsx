import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const PersonalityTypeCompatibility = () => {
  const [selectedType, setSelectedType] = useState(null);

  const compatibilityData = {
    "Openness": {
      compatibleWith: ["Openness", "Agreeableness"],
      description:
        "People high in Openness tend to connect well with others who value creativity and intellectual exploration. They also appreciate agreeable personalities who are cooperative and empathetic."
    },
    "Conscientiousness": {
      compatibleWith: ["Conscientiousness", "Agreeableness"],
      description:
        "Conscientious individuals are organized and dependable, making them compatible with others who value responsibility and cooperation."
    },
    "Extraversion": {
      compatibleWith: ["Extraversion", "Agreeableness"],
      description:
        "Extraverts thrive in social settings and often connect well with other outgoing individuals and those who are empathetic and cooperative."
    },
    "Agreeableness": {
      compatibleWith: ["Agreeableness", "Conscientiousness"],
      description:
        "Agreeable people value harmony and cooperation, making them a good match for conscientious and similarly agreeable individuals."
    },
    "Neuroticism": {
      compatibleWith: ["Agreeableness"],
      description:
        "Those with high Neuroticism may benefit from relationships with empathetic and supportive individuals, particularly those high in Agreeableness."
    }
  };

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-20">
      <Navbar />
      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Personality Type Compatibility
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a personality type below to learn about its compatibility with others.
          </p>
        </div>
      </section>
  
      <section className="py-16 px-4 bg-white">
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {Object.keys(compatibilityData).map((type) => (
            <button
              key={type}
              onClick={() => handleSelectType(type)}
              className={`px-4 py-2 text-white font-semibold rounded-lg shadow-md transition duration-300 ${
                selectedType === type
                  ? 'bg-purple-700'
                  : 'bg-purple-500 hover:bg-purple-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
  
        {selectedType && (
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              {selectedType}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {compatibilityData[selectedType].description}
            </p>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Compatible With:
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              {compatibilityData[selectedType].compatibleWith.map(
                (compatibleType, index) => (
                  <li key={index}>{compatibleType}</li>
                )
              )}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};
  

export default PersonalityTypeCompatibility;
