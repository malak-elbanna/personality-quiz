import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl mb-8">Page Not Found</p>
    <Link to="/" className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800 transition duration-300">
        Go to Home
    </Link>
    </div>
);
};

export default NotFound;