import {Navigation} from 'react-native-navigation';

export const goTo = (data: {
  name: string;
  componentId: string;
}): Promise<string> => {
  const {name, componentId} = data;

  return Navigation.push(componentId, {
    component: {
      name,
    },
  });
};
