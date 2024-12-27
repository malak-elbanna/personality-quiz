import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const [modalContent, setModalContent] = useState(null);

  const blogPosts = [
    {
      id: 'post1',
      title: "Understanding Your Personality",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      description: "Learn about the different aspects of your personality and how they shape your behavior.",
      content: `
        <h2>Understanding Your Personality</h2>
        <p>Personality is a complex and multifaceted aspect of human behavior. It encompasses a range of traits, behaviors, and patterns that define how individuals interact with the world around them. Understanding your personality can help you make better decisions, improve your relationships, and achieve personal growth.</p>
        <h3>Key Personality Traits</h3>
        <p>Some of the key personality traits include:</p>
        <ul>
          <li><strong>Openness:</strong> The degree to which you are open to new experiences and ideas.</li>
          <li><strong>Conscientiousness:</strong> How organized, responsible, and dependable you are.</li>
          <li><strong>Extraversion:</strong> Your level of sociability, energy, and assertiveness.</li>
          <li><strong>Agreeableness:</strong> How cooperative, compassionate, and friendly you are.</li>
          <li><strong>Neuroticism:</strong> The extent to which you experience negative emotions like anxiety and depression.</li>
        </ul>
      `
    },
    {
      id: 'post2',
      title: "The Benefits of Personality Quizzes",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      description: "Discover the various benefits of taking personality quizzes and how they can help you.",
      content: `
        <h2>The Benefits of Personality Quizzes</h2>
        <p>Personality quizzes can provide valuable insights into your character, preferences, and behaviors. Here are some of the benefits of taking personality quizzes:</p>
        <h3>Self-awareness</h3>
        <p>Gain a deeper understanding of your own personality traits and how they influence your behavior.</p>
        <h3>Personal growth</h3>
        <p>Identify areas for improvement and work on developing new skills and habits.</p>
        <h3>Career guidance</h3>
        <p>Discover careers that align with your personality and interests.</p>
        <h3>Relationship insights</h3>
        <p>Learn how your personality affects your relationships and how to improve your interactions with others.</p>
      `
    },
    {
      id: 'post3',
      title: "How to Use Personality Insights",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      description: "Find out how to use the insights from personality quizzes to improve your life.",
      content: `
        <h2>How to Use Personality Insights</h2>
        <p>Personality insights can be a powerful tool for personal development and growth. Here are some ways to use these insights effectively:</p>
        <h3>Apply to Personal Growth</h3>
        <p>Use the information you gain from the quizzes to set goals and work on personal development.</p>
        <h3>Improve Relationships</h3>
        <p>Understanding your personality can help you communicate better and build stronger relationships.</p>
        <h3>Career Development</h3>
        <p>Identify career paths that align with your strengths and preferences.</p>
      `
    },
    {
      id: 'post4',
      title: "Exploring Different Personality Types",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      description: "Explore the different personality types and what they mean for you.",
      content: `
        <h2>Exploring Different Personality Types</h2>
        <p>There are various personality typing systems that categorize individuals into different types based on their traits and behaviors. Some of the most popular systems include:</p>
        <h3>Myers-Briggs Type Indicator (MBTI)</h3>
        <p>The MBTI categorizes individuals into 16 personality types based on four key dimensions: Introversion/Extraversion, Sensing/Intuition, Thinking/Feeling, and Judging/Perceiving.</p>
        <h3>Big Five Personality Traits</h3>
        <p>The Big Five model measures five major dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.</p>
        <h3>Enneagram</h3>
        <p>The Enneagram identifies nine interconnected personality types, each with its own strengths and challenges.</p>
      `
    }
  ];

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-20">
      <Navbar />
      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-purple-700">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to our blog! Here, we share insights and stories about personality traits, quizzes, and personal growth.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 text-center">
                  <img src={post.avatar} alt={post.title} className="w-32 h-32 mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button
                    className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800 transition duration-300"
                    onClick={() => openModal(post.content)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg mx-auto relative">
            <button className="absolute top-2 right-2 text-gray-700" onClick={closeModal}>&times;</button>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Blog;