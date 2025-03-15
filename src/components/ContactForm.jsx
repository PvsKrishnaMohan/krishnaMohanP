import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-full mx-auto lg:flex-row lg:space-x-8">
      <div className="flex-1 h-full items-center justify-center p-2 w-full">
        <div className={`bg-${darkMode ? 'gray-800' : 'white'} border border-gray-300 rounded-lg shadow-lg p-6 h-full mb-4`}>
          <h2 className={`text-2xl md:text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-black'}`}>Get in Touch</h2>
          <p className={`text-base md:text-xl text-start mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          A versatile Full Stack Web Developer who is enthusiastic and creative in designing Web projects with tailor-based designs. Open to work. Feel free to reach me at pkmohan479@gmail.com.          </p>
          <div className="flex items-center mb-2">
            <img src="https://res.cloudinary.com/krishnamohan479/image/upload/v1737920807/3dicons-boy-front-color_w3lqbh.png" alt="User Icon" className="mr-2 w-12 h-12" />
            <span className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}> Krishna Mohan P.V.S</span>
          </div>
          <div className="flex items-center mb-2">
            <img src="https://res.cloudinary.com/krishnamohan479/image/upload/v1738570899/3dicons-call-only-front-color_g1m9zu.png" alt="Contact Icon" className="mr-2 w-12 h-12" />
            <span className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}> +91 938****989</span>
          </div>
          <div className="flex items-center mb-2">
            <img src="https://res.cloudinary.com/krishnamohan479/image/upload/v1738595382/3dicons-map-pin-front-color_asxjay.png" alt="Contact Icon" className="mr-2 w-12 h-12" />
            <span className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}> India</span>
          </div>
          {/* <div className="flex items-center mb-2">
            <img src="https://res.cloudinary.com/krishnamohan479/image/upload/v1738583094/3dicons-mail-front-premium_rmdb2b.png" alt="Email Icon" className="mr-2 w-12 h-12" />
            <span className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}>  pkmohan479@gmail.com</span>
          </div> */}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex-1 space-y-1">
      <span className="block md:hidden text-center text-slate-300 mt-5">Message me</span>

        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"} mb-2`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"} mb-2`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className={`block text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"} mb-2`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <button
          type="submit"
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} transition-colors duration-300`}
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
