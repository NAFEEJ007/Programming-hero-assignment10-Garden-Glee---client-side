import React, { Suspense } from "react";
import Tip from "../Tip/Tip";

const Tips = ({ gardeners }) => {

  return (
    <div>
      <h1>These are Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <Suspense fallback={<span>Loading...</span>}>
          {gardeners.map((singleTip) => (
            <Tip tips={gardeners} key={singleTip._id} singleTip={singleTip}></Tip>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Tips;
