import React, { useState } from 'react';
 // Fixing import if using react-router-dom v6+

import { FaLeaf, FaUserAlt, FaEnvelope, FaSeedling, FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
  const {
    title,
    plantType,
    difficulty,
    description,
    images,
    category,
    userName,
    userEmail,
  } = useLoaderData();

  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-100 to-emerald-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden p-8 border border-green-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Preview */}
          <div className="w-full md:w-1/2">
            <img
              src={images}
              alt={title}
              className="rounded-xl w-full h-64 object-cover shadow-lg border-2 border-green-200"
            />
          </div>

          {/* Info Content */}
          <div className="w-full md:w-1/2 text-green-900 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-wide flex items-center gap-2 text-emerald-700">
              <FaLeaf className="text-green-500" /> {title}
            </h2>

            <p className="text-sm flex items-center gap-2">
              <FaSeedling className="text-lime-500" />
              <span className="font-semibold">Plant Type:</span> {plantType}
            </p>

            <p className="text-sm flex items-center gap-2">
              <span className="font-semibold">Difficulty:</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  difficulty === 'Easy'
                    ? 'bg-lime-200 text-green-900'
                    : difficulty === 'Medium'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-red-200 text-red-800'
                }`}
              >
                {difficulty}
              </span>
            </p>

            <p className="text-sm">
              <span className="font-semibold">Category:</span> {category}
            </p>

            <div className="text-sm mt-4 bg-green-50 border-l-4 border-green-300 p-3 rounded shadow-sm text-green-800 leading-relaxed">
              <span className="font-semibold">Description:</span> {description}
            </div>
            {/* Like Button */}
            <button 
              onClick={() => setLiked(!liked)}
              className={`cursor-pointer mt-4 flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition ${
                liked
                  ? 'bg-red-500 text-white'
                  : 'bg-green-100 text-green-900 hover:bg-green-200'
              }`}
            //   whileTap={{ scale: 0.9 }}
            >
              <FaHeart className={`${liked ? 'animate-ping text-white' : 'text-green-800'}`} />
              {liked ? 'Liked' : 'Like this Tip'}
            </button>

          </div>
        </div>

        {/* User Info */}
        <div className="mt-10 border-t border-green-300 pt-5">
          <h3 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
            🌱 Submitted By:
          </h3>
          <div className="flex items-center gap-4 text-green-900">
            <FaUserAlt className="text-green-600" />
            <span className="font-medium">{userName}</span>

            <FaEnvelope className="text-green-600 ml-4" />
            <span>{userEmail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
