// filepath: /c:/Users/musta/personality-quiz/front/src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <dotlottie-player
        src="https://lottie.host/f03a030b-b068-4324-8d16-126cfc2214da/ZH30oRVh2t.lottie"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></dotlottie-player>
      <Link to="/" className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800 transition duration-300 mt-8">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;