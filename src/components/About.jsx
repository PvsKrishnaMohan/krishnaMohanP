import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Code, Globe, Book, Brain, Database, Terminal } from "lucide-react";

const About = ({ darkMode }) => {
  const animation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
  });

  const skills = [
    {
      name: "React",
      color: "#61DAFB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: "https://res.cloudinary.com/krishnamohan479/image/upload/v1738583094/javascript_tafrzr.png",
    },
    {
      name: "Node.js",
      color: "#339933",
      icon: "https://res.cloudinary.com/krishnamohan479/image/upload/v1738583093/nodejs_pvxit8.png",
    },
    
    {
      name: "MongoDB",
      color: "#47A248",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Python",
      color: "#3776AB",
      icon: "https://res.cloudinary.com/krishnamohan479/image/upload/v1738583092/python_zwqd14.png",
    },
    {
      name: "Tailwind CSS",
      color: "#3178C6",
      icon: "https://res.cloudinary.com/krishnamohan479/image/upload/v1738583092/tailwind_ha7rwq.png",
    },
  ];

  return (
    <section
      id="about"
      className={` ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-50 text-gray-900"
      }`}
    >
      <animated.div
        style={animation}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 font-display gradient-text">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Creative Developer & Problem Solver
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              With over 4.5 years of experience in web development, I specialize
              in creating robust and scalable applications using modern
              technologies. My passion lies in building user-centric solutions
              that combine clean code with intuitive design.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I'm constantly learning and adapting to new technologies,
              believing that staying current is key to delivering the best
              solutions. Whether it's front-end development, back-end
              architecture, or full-stack implementation, I approach each
              project with dedication and creativity.
            </p>
          </div>

          <div className="relative order-first lg:order-last">
            <img
              src="https://res.cloudinary.com/krishnamohan479/image/upload/v1723715217/WhatsApp_Image_2024-08-15_at_2.37.44_PM_yvuzns.png"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="mt-12 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 sm:p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg transform hover:scale-110 transition-all duration-300 group`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-center">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
          <div
            className={`p-4 sm:p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transform hover:scale-105 transition-transform duration-300`}
          >
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-blue-500" />
            <h4 className="text-base sm:text-lg font-semibold mb-2">
              Problem Solving
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Analytical approach to solving complex technical challenges
            </p>
          </div>

          <div
            className={`p-4 sm:p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transform hover:scale-105 transition-transform duration-300`}
          >
            <Database className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-green-500" />
            <h4 className="text-base sm:text-lg font-semibold mb-2">Database Design</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Efficient and scalable database architectures</p>
           
          </div>

          <div
            className={`p-4 sm:p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transform hover:scale-105 transition-transform duration-300`}
          >
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-purple-500" />
            <h4 className="text-base sm:text-lg font-semibold mb-2">
              Clean Code
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Writing maintainable and efficient code
            </p>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default About;
