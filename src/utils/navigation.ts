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

export const goToRoot = (name: string) =>
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
              name,
            },
          },
        ],
      },
    },
  });
