import Home from '../pages/Home';
import MainLayout from '../layout/layout';

export const HOME_PATH = '/';

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [{ path: HOME_PATH, Component: Home }],
};
