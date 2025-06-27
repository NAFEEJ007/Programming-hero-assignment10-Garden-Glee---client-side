import React, { Suspense } from "react";
import Gardener from "../Gardener/Gardener";

const Gardeners = ({ gardeners }) => {
  return (
    <div>
      <h1>These are gardeners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <Suspense fallback={<span>Loading...</span>}>
          {gardeners.map((singleGardener) => (
            <Gardener
              key={singleGardener._id}
              singleGardener={singleGardener}
            ></Gardener>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Gardeners;
