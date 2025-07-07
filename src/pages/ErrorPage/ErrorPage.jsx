import React from 'react';
import { FaLeaf, FaHome } from 'react-icons/fa';
import { GiPlantSeed } from 'react-icons/gi';
import { Link } from 'react-router';


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-lime-50 to-green-100 text-green-900 p-6 text-center">
      
      {/* Animated Icon */}
      <div className="mb-6 animate-bounce-slow">
        <GiPlantSeed className="text-green-600 text-7xl drop-shadow-lg" />
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl font-extrabold text-green-700 mb-4 drop-shadow-md">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Lost in the Garden?
      </h2>

      {/* Message */}
      <p className="max-w-md mb-8 text-green-800">
        Oops! The page you're looking for has either been pruned 🌿 or never planted. Let's help you find your way back to greener paths.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
