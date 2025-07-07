import React from "react";
import { FaMapMarkerAlt, FaUserCheck, FaLeaf, FaUserTimes } from "react-icons/fa";
import { GiGardeningShears, GiProgression } from "react-icons/gi";

const ExploreGardernersCard = ({ allGardener }) => {
  const { name, location, status, image, tip, difficulty } = allGardener;

  const isActive = status.toLowerCase() === "active";

  return (
    <div className="relative bg-gradient-to-br from-lime-50 to-green-100 border border-emerald-200 rounded-3xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-green-300 duration-300 animate-fade-in">
      
      {/* Floating Icon */}
      <div className={`absolute -top-3 -right-3 rounded-full p-2 shadow-md animate-pulse z-10 
        ${isActive ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
        {isActive ? <FaLeaf /> : <FaUserTimes />}
      </div>

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 rounded-t-3xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2 text-green-900">
        {/* Name */}
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <GiGardeningShears className="text-green-600 text-3xl" />
          {name}
        </h3>

        {/* Location */}
        <p className="text-sm flex items-center gap-2 text-emerald-700 font-medium">
          <FaMapMarkerAlt className="text-green-600" />
          {location}
        </p>

        {/* Status */}
        <p className="text-sm flex items-center gap-2">
          {isActive ? (
            <>
              <FaUserCheck className="text-green-500" />
              <span className="capitalize text-green-700">{status}</span>
            </>
          ) : (
            <>
              <FaUserTimes className="text-red-500" />
              <span className="capitalize text-red-700">{status}</span>
            </>
          )}
        </p>

        {/* Difficulty */}
        <p className="text-sm flex items-center gap-2 text-green-800">
          <GiProgression className="text-lime-600" />
          Difficulty: <span className="font-semibold capitalize">{difficulty}</span>
        </p>

        {/* Tip */}
        <div className="mt-2">
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-green-700">🌼 Tip:</span> {tip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreGardernersCard;
