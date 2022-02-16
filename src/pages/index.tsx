import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { Layout } from '@/widgets/Layout';

const MainPage = lazy(() => import('./MainPage'));
const RatesPage = lazy(() => import('./RatesPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/rates',
        element: <RatesPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to='/404' />,
      },
      {
        path: '',
        element: <Navigate to='/' />,
      },
    ],
  },
];

export const Routing = () => {
  const elements = useRoutes(routes);
  return <Suspense fallback='Loading...'>{elements}</Suspense>;
};
