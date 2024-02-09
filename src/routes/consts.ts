import Challenge1 from '../pages/Challenge1';
import Home from '../pages/Home';
import MainLayout from '../layout/layout';

export const HOME_PATH = '/';
export const CHALLENGE_1 = 'challenge1';

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: CHALLENGE_1, Component: Challenge1 },
  ],
};
