import React from "react";

const Gardener = ({ singleGardener }) => {
  const { image, location, name, status, tip } = singleGardener;

  return (
    <div className="w-full  mx-auto cursor-pointer">
      <div className="relative group transform transition-all duration-500 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-green-400 rounded-3xl">
        {/* Pulsing border ring on hover */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500 group-hover:animate-pulse z-10 pointer-events-none transition duration-700"></div>

        {/* Card without overlay */}
        <div className="card relative z-0 rounded-2xl shadow-md overflow-hidden 
          bg-gradient-to-br from-[#dcedc1] via-[#a8e6cf] to-[#81c784]
          text-gray-800 border border-green-200 transition-colors duration-500">

          {/* Image Section */}
          <figure className="w-full h-72 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </figure>

          {/* Card Content */}
          <div className="card-body p-5 space-y-3 relative z-0">
            <h2 className="text-xl font-bold text-green-800">{name}</h2>
            <p className="text-sm text-gray-700">
              📍 <span className="font-medium">{location}</span>
            </p>
            <p className="text-sm italic text-gray-800">
              🌿 <span className="font-semibold">Tip:</span> “{tip}”
            </p>

            {/* Status Badge */}
            <div className="pt-3 flex justify-end">
              <span className="badge rounded-full border border-green-400 text-green-800 bg-green-100 px-3 py-1 text-sm">
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gardener;
