import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to React Router App
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          This is a demonstration of React Router functionality, showcasing 
          navigation between multiple pages and parameterized routes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Multi-page navigation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Dynamic routing with parameters
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Responsive design with Tailwind CSS
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Active navigation highlighting
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quick Navigation
          </h2>
          <div className="space-y-4">
            <Link
              to="/about"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-center transition-colors duration-200"
            >
              Learn About This App
            </Link>
            <Link
              to="/users"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-center transition-colors duration-200"
            >
              Browse Users
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Explore?
        </h2>
        <p className="text-lg mb-6">
          Navigate through the application using the menu above or the buttons below
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            About This App
          </Link>
          <Link
            to="/users"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;