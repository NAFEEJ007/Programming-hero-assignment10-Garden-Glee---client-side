import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

// import Gardeners from '../components/Gardeners';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          // Promise.all is used to send both requests at the same time
          const [gardenersRes, eventsRes] = await Promise.all([
            fetch("http://localhost:3000/gardeners"),
            fetch("http://localhost:3000/events"),
          ]);

          // Promise.all is used to parse both at the same time
          const [gardeners, events] = await Promise.all([
            gardenersRes.json(),
            eventsRes.json(),
          ]);

          return { gardeners, events };
        }
      }
    ]
  },
]);