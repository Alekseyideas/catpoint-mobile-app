const createRouteName = (name: string): string => `com.catPoint.${name}Screen`;
export const ROUTES = {
  login: createRouteName('Login'),
  welcome: createRouteName('Welcome'),
  init: createRouteName('Init'),
  home: createRouteName('Home'),
};

export const COLORS = {
  blue: '#003366',
};
