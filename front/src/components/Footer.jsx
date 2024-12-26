import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social icons


const Footer = () => {
  return (
    <footer className="footer bg-purple-150">
      <div className="footer-content container mx-auto px-4 text-center">
        <p className="text-purple-600">&copy; {new Date().getFullYear()} Quiz Haven. All rights reserved.</p>
        <div className="social-links flex justify-center space-x-6 mt-4">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-500 hover:text-purple-700 transition duration-300"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a 
            href="https://www.twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-500 hover:text-purple-700 transition duration-300"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-500 hover:text-purple-700 transition duration-300"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
