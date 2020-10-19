/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import * as Screen from './src/screens';
import {ROUTES} from './src/utils/const';
import store from './src/store';
import {goToRoot} from './src/utils/navigation';

const WithRedux: React.FC = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

Navigation.registerComponent(ROUTES.compLogin, () => (props) => (
  <WithRedux>
    <Screen.CompLogin {...props} />
  </WithRedux>
));
Navigation.registerComponent(ROUTES.registerCompany, () => (props) => (
  <WithRedux>
    <Screen.RegisterCompany {...props} />
  </WithRedux>
));

Navigation.registerComponent(ROUTES.login, () => (props) => (
  <WithRedux>
    <Screen.Login {...props} />
  </WithRedux>
));

Navigation.registerComponent(ROUTES.welcome, () => (props) => (
  <WithRedux>
    <Screen.Welcome {...props} />
  </WithRedux>
));

Navigation.registerComponent(ROUTES.init, () => (props) => (
  <WithRedux>
    <Screen.Init {...props} />
  </WithRedux>
));

Navigation.registerComponent(ROUTES.home, () => (props) => (
  <WithRedux>
    <Screen.Home {...props} />
  </WithRedux>
));

Navigation.registerComponent(ROUTES.companyHome, () => (props) => (
  <WithRedux>
    <Screen.CompanyHome {...props} />
  </WithRedux>
));

Navigation.events().registerAppLaunchedListener(() => goToRoot(ROUTES.init));
