import React from "react";
import DashboardLayout from "./layouts/Dashboard";
import ExersiceList from "./pages/exersiceList";
import Exersice from "./pages/exersice";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "Exercise-list",
        element: <ExersiceList />,
      },
      {
        path: "exersice",
        element: <Exersice />,
      },
    ],
  },
];

export default routes;
