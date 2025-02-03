import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import sunImage from '../assets/sun.png'; // Adjust the path as necessary
import moonImage from '../assets/moon.png'; // Adjust the path as necessary


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Portfolio
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}>Home</a>
            <a href="#about" className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}>About</a>
            <a href="#projects" className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}>Projects</a>
            <a href="#contact" className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}>Contact</a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {darkMode ? <img src={sunImage} alt="Sun" className="w-5 h-5" /> : <img src={moonImage} alt="Moon" className="w-5 h-5" />}

            </button>
          </div>

          {/* Mobile menu buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'} transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {darkMode ? <img src={sunImage} alt="Sun" className="w-5 h-5" /> : <img src={moonImage} alt="Moon" className="w-5 h-5" />}

            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'} transition-colors duration-200`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <a 
              href="#home" 
              className={`block px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`block px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className={`block px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`block px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
