import React from 'react';
import { useLoaderData } from 'react-router';
import ExploreGardernersCard from '../ExploreGardernersCard/ExploreGardernersCard';
import { FaLeaf } from 'react-icons/fa';

const ExploreGardeners = () => {
  const allGardeners = useLoaderData();
  console.log(allGardeners);

  return (
    <div className="min-h-screen bg-lime-50 py-16 px-4 md:px-12">
      {/* 🌱 Section Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 text-green-700 text-4xl font-bold">
          <FaLeaf className="text-green-500 animate-pulse" />
          <h2 className="drop-shadow">Our Passionate Gardeners</h2>
        </div>
        <p className="mt-2 text-green-800 text-sm md:text-base max-w-xl mx-auto">
          Discover nature lovers from around the globe, sharing their favorite gardening tips, plant hacks, and green secrets. 🌼🪴
        </p>
      </div>

      {/* 🌿 Gardeners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allGardeners.map((gardener) => (
          <ExploreGardernersCard key={gardener._id} allGardener={gardener} />
        ))}
      </div>

      {/* Optional: Footer padding */}
      <div className="mt-20"></div>
    </div>
  );
};

export default ExploreGardeners;
