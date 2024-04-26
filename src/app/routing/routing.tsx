import { lazy } from 'react';

const Home = lazy(() => import('../../pages/home'));
const Game = lazy(() => import('../../pages/game'));
const Festival = lazy(() => import('../../pages/festival'));

export const routing = [
  {
    key: 'home',
    path: '/',
    title: 'Home',
    component: <Home />,
  },
  {
    key: 'game',
    path: '/game',
    title: 'Game',
    component: <Game />,
  },
  {
    key: 'festival',
    path: '/festival',
    title: 'Festival',
    component: <Festival />,
  },
];
