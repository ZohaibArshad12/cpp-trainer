import React from 'react';
import DashboardLayout from './layouts/Dashboard';
import ExersiceList from './pages/exersiceList';
import Exersice from './pages/exersice';
import ExersiceDone from './pages/exerciseDone';
const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <ExersiceList />,
      },
      {
        path: 'Exercise-list',
        element: <ExersiceList />,
      },
      {
        path: 'exersice',
        element: <Exersice />,
      },
      {
        path: 'exersice-done',
        element: <ExersiceDone />,
      },
    ],
  },
];

export default routes;
