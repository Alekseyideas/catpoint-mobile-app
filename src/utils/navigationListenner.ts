import {Navigation} from 'react-native-navigation';

export const compDidApear = (componentId: string, callBack: () => void) => {
  return Navigation.events().registerComponentDidAppearListener((comp) => {
    if (comp.componentId === componentId) {
      callBack();
    }
  });
};
