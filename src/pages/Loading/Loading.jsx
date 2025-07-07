import React from 'react';
import { FaLeaf } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100 text-green-800 animate-fade-in p-6">
      
      {/* Spinner */}
      <div className="mb-6 animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-green-500 border-opacity-75"></div>

      {/* Leaf Icon */}
      <FaLeaf className="text-5xl text-green-600 animate-bounce mb-4 drop-shadow-md" />

      {/* Message */}
      <h2 className="text-2xl font-semibold mb-2">Growing something wonderful...</h2>
      <p className="text-base italic text-green-700 max-w-xs text-center">
        "Gardens take time — so does greatness 🌱"
      </p>
    </div>
  );
};

export default Loading;
