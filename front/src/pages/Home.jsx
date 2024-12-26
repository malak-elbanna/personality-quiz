import Navbar from '../components/Navbar'; 
import HeroCarousel from '../components/HeroCarousel';
import Statistics from '../components/Statistics';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-purple-100 text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <HeroCarousel />
      </section>

      {/* Welcome Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-purple-700 mb-4">Welcome to Quiz Haven!</h2>
          <p className="text-xl text-purple-600 mb-8">
            Explore our wide range of fun, insightful personality quizzes. Uncover hidden truths about yourself, and share the experience with friends!
          </p>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="bg-white py-16 text-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">Ready to Discover More?</h2>
          <p className="text-xl mb-8">
            Take our fun quizzes now and unlock your personality profile. What are you waiting for? Dive in!
          </p>
                      <Link 
              to="/collection" 
              className="bg-purple-700 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-800 transition duration-300"
            >
              Start Quizzes Now
            </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Site Statistics</h2>
          <Statistics />
        </div>
      </section>

      
    </div>
  );
};

export default Home;
