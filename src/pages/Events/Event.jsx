import React from 'react';

const Event = ({ singleEvent }) => {
  const { title, date, description, location, image } = singleEvent;

  return (
    <div className=" h-[500px] perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg border border-green-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-green-100 to-lime-200 p-6 rounded-2xl text-gray-800 rotate-y-180 backface-hidden shadow-lg border border-lime-300">
          <h2 className="text-xl font-bold text-green-900 mb-2">{title}</h2>
          <p className="text-sm italic text-lime-700 mb-1">{location}</p>
          <p className="text-sm font-medium mb-4">{description}</p>
          <div className="text-xs text-green-800 font-semibold mt-auto">
            📅 {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
