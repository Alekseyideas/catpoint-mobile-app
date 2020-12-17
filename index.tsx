/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import * as Screen from './src/screens';
import {ROUTES} from './src/utils/const';
import store from './src/store';
import {goToRoot} from './src/utils/navigation';
import {firstCharUpperCase} from './src/utils/helpers';

const WithRedux: React.FC = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

Object.keys(ROUTES).forEach((route) => {
  const scrName = firstCharUpperCase(route);
  // remove typescript error
  const Scr: any = Screen;
  const AnyRoute: any = ROUTES;

  const Comp = Scr[scrName];
  Navigation.registerComponent(AnyRoute[route], () => (props) => (
    <WithRedux>
      <Comp {...props} />
    </WithRedux>
  ));
});

Navigation.events().registerAppLaunchedListener(() => goToRoot(ROUTES.init));
