import React from 'react';

const Tip = ({ singleTip }) => {
  const { tip, name } = singleTip;

  return (
    <div
      className="bg-gradient-to-br from-green-50 to-lime-100 border border-green-200 
                 rounded-2xl shadow-lg p-6 transition-all duration-300 transform 
                 hover:scale-105 hover:shadow-2xl hover:border-lime-400 cursor-pointer"
    >
      {/* Gardener's Name */}
      <div className="flex items-center gap-2 mb-3">
        <div className="text-green-700 text-2xl">🌿</div>
        <h2 className="text-xl font-bold text-green-900">
          Tip from <span className="text-lime-600 underline underline-offset-4">{name}</span>
        </h2>
      </div>

      {/* The Tip Content */}
      <blockquote className="text-gray-800 italic leading-relaxed border-l-4 border-lime-500 pl-4">
        “{tip}”
      </blockquote>

      {/* Hashtags */}
      <div className="mt-4 text-xs text-lime-700 italic flex gap-2">
        <span>🌱 #gardening</span>
        <span>🌸 #plantcare</span>
      </div>
    </div>
  );
};

export default Tip;



