import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseTips = () => {
  const publicTips = useLoaderData();
  const [tips, setTips] = useState(publicTips);

  return (
    <div className="px-4 md:px-10 py-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        🌱 Community Garden Tips
      </h1>

      <div className="cursor-pointer overflow-x-auto rounded-2xl shadow-xl border border-green-200">
        <table className="table table-zebra">
          <thead className="bg-gradient-to-r from-lime-300 to-green-400 text-green-900 text-md">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Image</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr
                key={tip._id}
                className="hover:bg-lime-100 transition duration-300"
              >
                <td className="font-semibold text-green-700">{index + 1}</td>

                <td className="font-medium text-green-800">{tip.title}</td>

                <td>
                  <span className="badge badge-success bg-green-200 text-green-800 px-4 py-6 lg:px-3 lg:py-1 rounded-full">
                    {tip.category}
                  </span>
                </td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12 ring-2 ring-lime-400">
                      <img
                        src={tip.images}
                        alt="Tip Illustration"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </td>

                <td>
                  <Link to = {`/tips-details/${tip._id}`}>
                    <button className="btn btn-sm bg-lime-500 hover:bg-green-600 text-white shadow-md transition duration-300">
                      See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
