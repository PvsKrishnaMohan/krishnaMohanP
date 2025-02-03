import React, { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'Programmer',
  'Problem Solver',
  'Mentor',
  'Editor',
];

const AnimatedText = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, roleIndex, isDeleting]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-4">
      <span className={`font-medium ${darkMode ? 'text-white' : ''}`}>I'm a</span>
      <div className="relative min-w-[200px] sm:min-w-[300px] text-center sm:text-left">
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          {displayText}
        </span>
        <span className="absolute top-0 ml-1 text-blue-600 dark:text-blue-400 animate-blink">|</span>
      </div>
    </div>
  );
};

export default AnimatedText;
