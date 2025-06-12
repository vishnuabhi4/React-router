import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About This Application
        </h1>
        
        <div className="prose max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Purpose & Overview
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This React application serves as a comprehensive demonstration of React Router 
              capabilities, showcasing modern web development practices and routing patterns. 
              It demonstrates how to build a multi-page single-page application (SPA) with 
              seamless navigation and dynamic content loading.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The application includes essential features such as parameterized routes, 
              active navigation highlighting, and responsive design principles to create 
              an optimal user experience across different devices.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Technologies Used
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• React 18</li>
                  <li>• React Router DOM</li>
                  <li>• JavaScript ES6+</li>
                  <li>• Functional Components & Hooks</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Styling</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                  <li>• Modern UI Components</li>
                  <li>• Smooth Transitions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Features
            </h2>
            <div className="grid gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Multi-Page Navigation</h3>
                  <p className="text-gray-600">Seamless navigation between Home, About, and Users pages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Dynamic Routing</h3>
                  <p className="text-gray-600">Parameterized routes for individual user detail pages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Active Navigation</h3>
                  <p className="text-gray-600">Visual indication of the current page in the navigation bar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Responsive Design</h3>
                  <p className="text-gray-600">Mobile-first design that works on all device sizes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;