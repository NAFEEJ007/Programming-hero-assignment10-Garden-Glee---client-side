import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ShareTip from "../pages/ShareTip/ShareTip";
import BrowseTips from "../pages/BrowseTips/BrowseTips";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import TipsDetails from "../pages/TipsDetails/TipsDetails";
import MyTips from "../pages/MyTips/MyTips";
import UpdateTip from "../pages/UpdateTip/UpdateTip";
import ExploreGardeners from "../pages/ExploreGardeners/ExploreGardeners";

// import Gardeners from '../components/Gardeners';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
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
        },
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/share-tip",
        Component: ShareTip,
      },

      {
        path: "/gardeners",
        loader: ()=>fetch('http://localhost:3000/gardeners/all'),
        Component: ExploreGardeners,
      },

      {
        path: "/browse-Tips",
        loader: () => fetch("http://localhost:3000/sharetips/public"),
        Component: BrowseTips,
      },
      {
        path: "/tips-details/:_id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sharetips/${params._id}`),
        element: (
          <PrivateRoute>
            <TipsDetails></TipsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTip/:_id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sharetips/${params._id}`),
        element: (
          <PrivateRoute>
            <UpdateTip></UpdateTip>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
