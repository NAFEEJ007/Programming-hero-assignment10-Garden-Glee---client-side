import React, { Suspense } from 'react';
import Event from './Event';

const Events = ({events}) => {
    return (
    <div>
      <h1>These are gardeners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <Suspense fallback={<span>Loading...</span>}>
          {events.map((singleEvent) => (
            <Event
              key={singleEvent._id}
              singleEvent={singleEvent}
            ></Event>
          ))}
        </Suspense>
      </div>
    </div>
    );
};

export default Events;