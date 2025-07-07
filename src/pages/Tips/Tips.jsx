import React, { Suspense } from "react";
import Tip from "../Tip/Tip";
import { FaSeedling } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Tips = ({ gardeners }) => {
  return (
    <div className="my-20 px-6 md:px-12">
      
      {/* Fancy Heading */}
      <div className="flex items-center justify-center mb-14 gap-6 relative">
        {/* Soft glowing orb behind */}
        <div className="absolute -top-6 -left-10 w-28 h-28 bg-gradient-to-tr from-lime-300 to-emerald-400 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>

        <FaSeedling className="text-5xl text-emerald-700 drop-shadow-lg animate-pulse" />

        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold 
          text-gradient bg-clip-text text-transparent
          bg-gradient-to-r from-emerald-900 via-lime-700 to-emerald-800
          drop-shadow-xl tracking-wide select-none">
          Tips
        </h1>

        <FaSeedling className="text-5xl text-emerald-700 drop-shadow-lg animate-pulse" />
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Suspense fallback={<Loading />}>
          {gardeners.map((singleTip) => (
            <Tip
              tips={gardeners}
              key={singleTip._id}
              singleTip={singleTip}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Tips;
