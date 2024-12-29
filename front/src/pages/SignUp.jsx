import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-purple-100 text-gray-800 font-sans">

      {/* Sign Up Section */}
      <section className="bg-white py-16 flex-grow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-purple-700 mb-4">Sign Up</h2>
          <p className="text-xl text-purple-600 mb-8">
            Join us today and start exploring your personality!
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-left text-purple-700 mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border border-purple-300 rounded" 
                placeholder="Enter your name" 
              />
            </div>
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
              Sign Up
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6">
            <p className="text-lg text-purple-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-purple-700 font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SignUp;
