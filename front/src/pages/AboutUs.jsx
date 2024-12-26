import { useState } from 'react';
import { Users, Brain, Mail, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "Scientific Approach",
      description: "Our assessments are validated through extensive research."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Diverse Quizzes",
      description: "Ouizzy offers 3 different quizzes testing different personality traits."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Personal Growth",
      description: "We believe understanding yourself better leads to better relationships."
    }
  ];

  const users = [
    {
      name: "Merna Ahmed",
      review: "The quizzes on Quizzy are very professional and helpful to know yourself better.",
      insights: ["Informative", "Helpful"]
    },
    {
      name: "Basmala Moustafa",
      review: "I love quizzy. Very cutesy. Very mindful. Veru demuuure!",
      insights: ["Cutesy", "Demure"]
    },
    {
      name: "Salma Ayman",
      review: "Quizzy are the second best thing on earth after the last slice of pizza.",
      insights: ["Insighful", "Cool"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-20">

      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Discover Your True Self
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to the future of personality assessment. Our quizzes help you understand yourself better. We promote for more self-confidence and stronger relationships!
          </p>

        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Why Quizzy?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl ${
                  hoveredFeature === index ? 'transform -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">What Our Users Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {users.map((user, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  
                  <div className="w-24 h-24 mb-4 mx-auto bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-2">{user.name}</h3>
                                    
                  <p className="text-gray-600 mb-4">{user.review}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {user.insights.map((insight, i) => (
                      <span key={i} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {insight}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6 text-purple-800">Get in Touch</h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <Mail className="w-12 h-12 text-purple-500" />
            </div>

            <p className="text-lg mb-4">
              Have questions or feedback? We would love to hear from you!
            </p>

            <a 
              href="mailto:s-malak.elbanna@zewailcity.edu.eg" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;