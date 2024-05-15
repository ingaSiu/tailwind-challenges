import Challenge1 from '../pages/challenges/Challenge1';
import Challenge10 from '../pages/challenges/Challenge10';
import Challenge11 from '../pages/challenges/Challenge11';
import Challenge12 from '../pages/challenges/Challenge12';
import Challenge2 from '../pages/challenges/Challenge2';
import Challenge3 from '../pages/challenges/Challenge3';
import Challenge4 from '../pages/challenges/challenge4/Challenge4';
import Challenge5 from '../pages/challenges/Challenge5';
import Challenge6 from '../pages/challenges/Challenge6';
import Challenge7 from '../pages/challenges/Challenge7';
import Challenge8 from '../pages/challenges/Challenge8';
import Challenge9 from '../pages/challenges/Challenge9';
import Home from '../pages/Home';
import MainLayout from '../layout/layout';

export const HOME_PATH = '/';
export const CHALLENGE_1 = 'challenge1';
export const CHALLENGE_2 = 'challenge2';
export const CHALLENGE_3 = 'challenge3';
export const CHALLENGE_4 = 'challenge4';
export const CHALLENGE_5 = 'challenge5';
export const CHALLENGE_6 = 'challenge6';
export const CHALLENGE_7 = 'challenge7';
export const CHALLENGE_8 = 'challenge8';
export const CHALLENGE_9 = 'challenge9';
export const CHALLENGE_10 = 'challenge10';
export const CHALLENGE_11 = 'challenge11';
export const CHALLENGE_12 = 'challenge12';

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: CHALLENGE_1, Component: Challenge1 },
    { path: CHALLENGE_2, Component: Challenge2 },
    { path: CHALLENGE_3, Component: Challenge3 },
    { path: CHALLENGE_4, Component: Challenge4 },
    { path: CHALLENGE_5, Component: Challenge5 },
    { path: CHALLENGE_6, Component: Challenge6 },
    { path: CHALLENGE_7, Component: Challenge7 },
    { path: CHALLENGE_8, Component: Challenge8 },
    { path: CHALLENGE_9, Component: Challenge9 },
    { path: CHALLENGE_10, Component: Challenge10 },
    { path: CHALLENGE_11, Component: Challenge11 },
    { path: CHALLENGE_12, Component: Challenge12 },
  ],
};
