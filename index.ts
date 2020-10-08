import {Navigation} from 'react-native-navigation';
import * as Screen from './src/screens';
import {ROUTES} from './src/utils/const';

Navigation.registerComponent(ROUTES.login, () => Screen.Login);
Navigation.registerComponent(ROUTES.welcome, () => Screen.Welcome);

Navigation.events().registerAppLaunchedListener(() => {
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
              name: ROUTES.welcome,
            },
          },
        ],
      },
    },
  });
});
