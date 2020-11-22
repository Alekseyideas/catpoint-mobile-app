import {Navigation} from 'react-native-navigation';
import * as MenuIcons from '../assets/images/menu';
import {COLORS, ROUTES} from './const';

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
        children: [
          {
            component: {
              name,
            },
          },
        ],

        options: {
          topBar: {
            visible: false,
          },
          bottomTab: {
            icon: MenuIcons.SrcIconHome,
          },
        },
      },
      // },
    },
  });
const defComp = {
  iconColor: '#BBBBBB',
  textColor: '#BBBBBB',
  animateBadge: true,
  selectedIconColor: COLORS.blue,
  selectedTextColor: COLORS.blue,
  iconInsets: {
    top: 5,
  },
};
export const setUserRoot = (name: string) =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomTabsMain',
        children: [
          {
            component: {
              name: ROUTES.home,
              options: {
                bottomTab: {
                  ...defComp,
                  icon: MenuIcons.SrcIconHome,
                  text: 'головна',
                },
              },
            },
          },
          {
            component: {
              name: ROUTES.history,
              options: {
                bottomTab: {
                  ...defComp,
                  icon: MenuIcons.SrcIconList,
                  text: 'iсторiя',
                },
              },
            },
          },
          {
            component: {
              name: ROUTES.prediction,
              options: {
                bottomTab: {
                  icon: MenuIcons.SrcBtnCatPoint,
                  textColor: '#BBBBBB',
                  text: 'передбачення',
                  selectedTextColor: COLORS.blue,
                  iconInsets: {
                    top: -45,
                  },
                },
                overlay: {
                  interceptTouchOutside: false,
                },
              },
            },
          },
          {
            component: {
              name: ROUTES.stock,
              options: {
                bottomTab: {
                  ...defComp,
                  icon: MenuIcons.SrcIconDiscount,
                  text: 'акцii',
                },
              },
            },
          },
          {
            component: {
              name: ROUTES.profile,
              options: {
                bottomTab: {
                  ...defComp,
                  icon: MenuIcons.SrcIconUser,
                  text: 'профiль',
                },
              },
            },
          },
        ],

        options: {
          topBar: {
            visible: false,
          },
          bottomTabs: {
            drawBehind: true,
            preferLargeIcons: true,
            animate: true,
            hideShadow: false,
          },
          bottomTab: {
            iconColor: '#F2F2F2',
          },
        },
      },
    },
  });
