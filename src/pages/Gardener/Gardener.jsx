import React from "react";

const Gardener = ({ singleGardener }) => {
  const { image, location, name, status, tip } = singleGardener;

  return (
    <div className="w-full h-full cursor-pointer">
      <div className="h-full flex flex-col justify-between relative group transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-xl rounded-3xl">
        {/* Card Container */}
        <div
          className="card h-full flex flex-col justify-between rounded-2xl shadow-md overflow-hidden 
          bg-gradient-to-r from-lime-100 via-green-100 to-emerald-100 
          text-green-900 transition-all duration-500"
        >
          {/* Image */}
          <figure className="w-full h-60 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </figure>

          {/* Content */}
          <div className="flex flex-col flex-grow justify-between card-body p-5 space-y-3">
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-emerald-900 drop-shadow">
                {name}
              </h2>

              <p className="text-sm text-green-800 flex items-center gap-1">
                📍 <span className="font-medium">{location}</span>
              </p>

              <p className="text-sm italic text-green-900 leading-relaxed">
                🌿 <span className="font-semibold">Tip:</span> “{tip}”
              </p>
            </div>

            {/* Badge */}
            <div className="pt-3 flex justify-end">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-green-300 via-lime-300 to-green-400 text-green-900 font-semibold text-sm shadow-md shadow-lime-200">
                🌱 {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gardener;
