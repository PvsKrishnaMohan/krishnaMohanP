import React from 'react';
import { Twitter } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6 text-center justify-center">
            <a
              href="https://github.com/PvsKrishnaMohan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <img src="https://res.cloudinary.com/krishnamohan479/image/upload/v1738583093/github_1_bcw4qc.png" alt="GitHub" className="w-10 h-10 shadow-lg  transition-transform duration-300 transform hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-mohan-p-v-s-68436b208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <img src="https://res.cloudinary.com/krishnamohan479/image/upload/v1738584222/linked_f2zxyv.png" alt="LinkedIn" className="w-8 h-8 m-1 shadow-lg transition-transform duration-300 transform hover:scale-110" />
            </a>
           
          </div>
          <p className={`text-sm ${darkMode ? 'text-slate-200' : 'text-gray-600'} text-center`}>
            © {new Date().getFullYear()} Krishna Mohan P.V.S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
