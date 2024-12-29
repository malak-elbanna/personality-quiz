import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const Signin = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Handle your sign-in logic here (e.g., form validation, API call)
    
    // Redirect to the Home page after successful sign-in
    navigate('/'); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-purple-100 text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Sign In Section */}
      <section className="bg-white py-16 flex-grow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-purple-700 mb-4">Sign in</h2>
          <p className="text-xl text-purple-600 mb-8">
            Start exploring your personality!
          </p>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left text-purple-700 mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-purple-300 rounded" 
                placeholder="Enter your email" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-purple-700 mb-2" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 border border-purple-300 rounded" 
                placeholder="Enter your password" 
              />
            </div>
            <button 
              type="submit" 
              className="bg-purple-700 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-800 transition duration-300"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>

      {/* Footer (optional) */}
      <Footer />
    </div>
  );
};

export default Signin;
