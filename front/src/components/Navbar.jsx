import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="bg-white bg-opacity-80 text-purple-600 p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
      <Link to="/" className="flex items-center text-2xl font-bold hover:text-purple-800">
  
  Quizzy
</Link>
       
        <div className={`flex space-x-6 ${menuActive ? 'block' : 'hidden'} md:flex`}>
          <Link to="/" className="text-purple-600 hover:text-purple-800">Home</Link>
          <Link to="/collection" className="text-purple-600 hover:text-purple-800">Quizzes</Link>
          <Link to="/about" className="text-purple-600 hover:text-purple-800">About Us</Link>
          <Link to="/blog" className="text-purple-600 hover:text-purple-800">Blog</Link>
          <Link to="/Gallery" className="text-purple-600 hover:text-purple-800">Quotes Gallery</Link>
        </div>

       
        <button className="md:hidden text-purple-600" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
