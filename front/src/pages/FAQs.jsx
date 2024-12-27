import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What quizzes are available on the website?',
      answer: (
        <div className="text-left">
          We currently offer three personality quizzes:
          <ul className="list-disc pl-6 mt-2">
            <li> Personality Quiz 1: Ideal for ages 12-18 (10 minutes)</li>
            <li> Personality Quiz 2: Ideal for ages 18-25 (15 minutes)</li>
            <li> Personality Quiz 3: Ideal for ages 25-35 (20 minutes)</li>
          </ul>
        </div>
      )
    },
    {
      question: 'How long do the quizzes take?',
      answer: (
        <div className="text-left">
          The quizzes take varying amounts of time based on the quiz:
          <ul className="list-disc pl-6 mt-2">
            <li> Personality Quiz 1: Approximately 10 minutes</li>
            <li> Personality Quiz 2: Approximately 15 minutes</li>
            <li> Personality Quiz 3: Approximately 20 minutes</li>
          </ul>
        </div>
      )
    },
    {
      question: 'Are there any age recommendations for the quizzes?',
      answer: (
        <div className="text-left">
          Yes, each quiz is recommended for different age groups:
          <ul className="list-disc pl-6 mt-2">
            <li> Personality Quiz 1: Ages 12-18</li>
            <li> Personality Quiz 2: Ages 18-25</li>
            <li> Personality Quiz 3: Ages 25-35</li>
          </ul>
        </div>
      )
    },
    {
      question: 'Can I take more than one quiz?',
      answer: 'Absolutely! Feel free to take as many quizzes as you like. Just keep in mind that each quiz is designed for specific age groups and may offer different insights.'
    },
    {
      question: 'What happens after I complete a quiz?',
      answer: 'After finishing a quiz, you’ll receive personalized results that are based on your responses. These insights are meant for entertainment and self-reflection.'
    },
    {
      question: 'Can I retake a quiz if I want to see different results?',
      answer: 'Yes, you can retake any quiz to see if your results change or if you want to reflect on different aspects of your personality.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-6 mt-8">
          <h1 className="text-3xl font-semibold text-purple-700 mb-8">Frequently Asked Questions</h1>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-6 bg-white shadow-md rounded-lg">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-purple-50 transition duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold text-purple-800">{faq.question}</h2>
                <span className="text-2xl text-purple-500">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-purple-50 rounded-b-lg">
                  <p className="text-lg text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
