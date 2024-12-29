import Navbar from '../components/Navbar'; 
import HeroCarousel from '../components/HeroCarousel';
import Statistics from '../components/Statistics';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-purple-100 text-gray-800 font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section  */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <HeroCarousel />
      </section>

      {/* Welcome */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-purple-700 mb-4">Welcome to Quizzy!</h2>
          <p className="text-lg sm:text-xl text-purple-600 mb-8">
            Explore our wide range of fun, insightful personality quizzes. Uncover hidden truths about yourself, and share the experience with friends!
          </p>
          <Link 
            to="/signup" 
            className="bg-purple-700 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-800 transition duration-300"
          >
            Sign up Now!
          </Link>
        </div>
      </section>
        
      {/* Call-to-Action (CTA) */}
      <section className="bg-white py-12 sm:py-16 text-purple-700">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Ready to Discover More?</h2>
          <p className="text-lg sm:text-xl mb-8">
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

      {/* Statistics */}
      <section className="bg-purple-50 py-12 sm:py-16">
  <div className="container mx-auto px-4 max-w-7xl">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-purple-700">
      Site Statistics
    </h2>
    <Statistics />
  </div>
</section>

    </div>
  );
};

export default Home;
