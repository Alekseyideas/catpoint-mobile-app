/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import * as Screen from './src/screens';
import {ROUTES} from './src/utils/const';
import store from './src/store';

const WithRedux: React.FC = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

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

Navigation.events().registerAppLaunchedListener(() => {
  let isLoggedIn = true;

  setTimeout(() => {
    isLoggedIn = true;
  }, 2000);

  if (isLoggedIn) {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: ROUTES.home,
              },
            },
          ],
        },
      },
    });
  } else {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: ROUTES.init,
              },
            },
          ],
        },
      },
    });
  }
});
