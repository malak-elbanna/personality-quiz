import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="bg-white bg-opacity-80 text-purple-600 p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold hover:text-purple-800">
          Quizzy
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-6">
            <Link to="/" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Home</Link>
            <Link to="/collection" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Quizzes</Link>
            <Link to="/aboutus" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">About Us</Link>
            <Link to="/blog" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Blog</Link>
            <Link to="/gallery" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Gallery</Link>
            <Link to="/PersonalityType" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Personality Types</Link>
            <Link to="/PersonalityTypeCompatibility" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Personality Type Compatibility</Link>
            <Link to="/FunFacts" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Fun Facts</Link>
            <Link to="/FAQs" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">FAQs</Link>
          </div>
        </div>

        {/* Sign Up Button */}
        <button onClick={() => navigate('/signup')} className="bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-1 px-2 border border-purple-800 hover:border-transparent rounded ml-4">
          Sign Up
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-purple-600 ml-4" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuActive && (
        <div className="md:hidden bg-white text-purple-600 absolute top-16 left-0 w-full p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-purple-800 hover:underline hover:underline-offset-8">Home</Link>
            <Link to="/collection" className="hover:text-purple-800 hover:underline hover:underline-offset-8">Quizzes</Link>
            <Link to="/aboutus" className="hover:text-purple-800 hover:underline hover:underline-offset-8">About Us</Link>
            <Link to="/blog" className="hover:text-purple-800 hover:underline hover:underline-offset-8">Blog</Link>
            <Link to="/gallery" className="hover:text-purple-800 hover:underline hover:underline-offset-8">Gallery</Link>
            <Link to="/PersonalityType" className="hover:text-purple-800 hover:underline hover:underline-offset-8">Personality Types</Link>
            <Link to="/PersonalityTypeCompatibility" className="hover:text-purple-800 hover:underline hover:underline-offset-8">Personality Type Compatibility</Link>
            <Link to="/FunFacts" className="hover:text-purple-800 hover:underline hover:underline-offset-8">Fun Facts</Link>
            <Link to="/FAQs" className="hover:text-purple-800 hover:underline hover:underline-offset-8">FAQs</Link>
            <div className="flex justify-right">
              <button onClick={() => navigate('/signup')} className="bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-1 px-2 border border-purple-800 hover:border-transparent rounded">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
