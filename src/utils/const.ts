const createRouteName = (name: string): string => `com.catPoint.${name}Screen`;
export const ROUTES = {
  login: createRouteName('Login'),
  welcome: createRouteName('Welcome'),
  init: createRouteName('Init'),
  home: createRouteName('Home'),
  companyHome: createRouteName('CompanyHome'),
  compLogin: createRouteName('CompLogin'),
  footer: createRouteName('Footer'),
  registerCompany: createRouteName('RegisterCompany'),
};

export const COLORS = {
  blue: '#003366',
};

export const LOGO_BASE_64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAADaCAMAAABpXPxgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAv1QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////htTccAAAAP90Uk5TADyHxuP/n1k0ktuoR6WuRnmvaQ1auGBs3oMnDm3Lv/iAJRU3T1docX10amFORDAS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';

export const LOCAL_STORE = {
  userId: 'userId',
  companyId: 'companyId',
  token: 'token',
  refToken: 'refreshToken',
};
