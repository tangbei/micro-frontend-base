import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Guide from "@/pages/Guide";
import Home from "@/pages/Home";
import Other from "@/pages/Other";
import HomeChild1 from "@/pages/Home/containers/HomeChild1";
import HomeChild2 from "@/pages/Home/containers/HomeChild2";
import HomeChild3 from "@/pages/Home/containers/HomeChild3";

const routes = [
  {
    path:"/",
    element: <Navigate to="/home" />,
  },
  {
    // path:"/home",
    element: <Home />,
    children: [
      {
        path:"/home",
        element: <Navigate to="/home/child1" />,
      },
      {
        path:"/home/child1",
        element: <HomeChild1 />,
      },
      {
        path:"/home/child2",
        element: <HomeChild2 />,
      },
      {
        path:"/home/child3",
        element: <HomeChild3 />,
      },
    ],
  },
  {
    path:"/other",
    element: <Other />,
  },
  {
    path:"/guide",
    element: <Guide />,
  },
];

const Router = () => {
  return useRoutes(routes);
};

export default Router;
