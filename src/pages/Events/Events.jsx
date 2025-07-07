import React, { Suspense } from 'react';
import Event from './Event';
import { FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import Loading from '../Loading/Loading';

const Events = ({ events }) => {
  return (
    <div className="my-20 px-6 md:px-12">
      
      {/* Fancy Heading */}
      <div className="flex items-center justify-center mb-14 gap-6 relative">
        {/* Soft glowing orb behind */}
        <div className="absolute -top-6 -left-12 w-28 h-28 bg-gradient-to-tr from-lime-300 to-emerald-400 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>

        <FaCalendarAlt className="text-5xl text-emerald-700 drop-shadow-lg animate-pulse" />

        <h1
          className="relative z-10 text-5xl md:text-6xl font-extrabold 
          text-gradient bg-clip-text text-transparent
          bg-gradient-to-r from-emerald-900 via-lime-700 to-emerald-800
          drop-shadow-xl tracking-wide select-none"
        >
          Upcoming Garden Events
        </h1>

        <FaLeaf className="text-5xl text-emerald-700 drop-shadow-lg animate-pulse" />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Suspense fallback={<Loading />}>
          {events.map((singleEvent) => (
            <Event key={singleEvent._id} singleEvent={singleEvent} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Events;
