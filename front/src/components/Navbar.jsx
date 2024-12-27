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
        
        <Link to="/" className="flex items-center text-2xl font-bold hover:text-purple-800">
          Quizzy
        </Link>
        
        <div className="flex-1 flex justify-center">
          <div className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 ${menuActive ? 'flex' : 'hidden'} md:flex`}>
            <Link to="/" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Home</Link>
            <Link to="/collection" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Quizzes</Link>
            <Link to="/about" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">About Us</Link>
            <Link to="/blog" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Blog</Link>
            <Link to="/gallery" className="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-8">Gallery</Link>
          </div>
        </div>
        
        <button onClick={()=>navigate('/signup')} className="bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-1 px-2 border border-purple-800 hover:border-transparent rounded ml-4">Sign Up</button>
        
        <button className="md:hidden text-purple-600 ml-4" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
