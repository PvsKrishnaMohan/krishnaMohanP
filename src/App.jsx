import React, { useState } from 'react';
import Navbar from './components/NavBar';
import About from './components/About';
import AnimatedText from './components/AnimatedText';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Background from './components/Background';
import { useSpring, animated } from '@react-spring/web';
import Resume from './assets/PVSKrishnaMohan_Resume.pdf';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as default

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
  });

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management application with collaborative features',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Firebase', 'Material-UI'],
      link: '#'
    },
    {
      title: 'Task Maker',
      description: 'Task tracker application uses to track daily tasks with timestamp enabled',
      image: 'https://res.cloudinary.com/krishnamohan479/image/upload/v1738611630/taskTracker-green_etiwj1.png',
      tags: ['React', 'TaskMaker','tailwindcss'],
      link: 'https://taskmaker-pvskrishnamohan.netlify.app/'
    }
  ];

  return (
    <div className={`min-h-screen relative ${darkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
      <Background darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {console.log('%cHello, This is Krishna Mohan, Thanks for visiting my Portfolio', 'color: blue; font-weight: bold; font-size: 20px; background: yellow; padding: 5px;')}
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-2 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
              : 'bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50'
          }`} />
        </div>
        
        <animated.div style={fadeIn} className="w-full max-w-7xl mx-auto text-center p-auto z-10">
          <div className="space-y-4 sm:space-y-6 px-4">
            <p className="text-base sm:text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
              Krishna Mohan
            </h1>
            <img src="https://res.cloudinary.com/krishnamohan479/image/upload/v1738570016/11zon_cropped_ylxkpq.jpg" alt="Krishna Mohan" className="rounded-full w-32 h-32 sm:w-48 sm:h-48 mx-auto" />
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">
              <AnimatedText darkMode={darkMode} />
            </div>
            <p className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto ${darkMode ? 'text-white' : 'text-gray-900'} leading-relaxed`}>
              Crafting beautiful web experiences with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={Resume} 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer" // Security feature
              >
                Download Resume
              </a>
            </div>
          </div>
        </animated.div>
      </section>

      <About darkMode={darkMode} />
      
      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 font-display gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 font-display gradient-text">Contact</h2>
          <ContactForm darkMode={darkMode} />
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
