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
      options: {
        topBar: {
          visible: false,
        },
      },
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

export const rootOp = {
  bottomTabs: {
    id: 'bottomTabsMain',
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: ROUTES.home,
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    ...defComp,
                    icon: MenuIcons.SrcIconHome,
                    text: 'головна',
                  },
                },
              },
            },
          ],
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: ROUTES.history,
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    ...defComp,
                    icon: MenuIcons.SrcIconList,
                    text: 'iсторiя',
                  },
                },
              },
            },
          ],
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: ROUTES.prediction,
                options: {
                  topBar: {
                    visible: false,
                  },
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
          ],
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: ROUTES.stock,
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    ...defComp,
                    icon: MenuIcons.SrcIconDiscount,
                    text: 'акцii',
                  },
                },
              },
            },
          ],
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: ROUTES.profile,
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    ...defComp,
                    icon: MenuIcons.SrcIconUser,
                    text: 'профiль',
                  },
                },
              },
            },
          ],
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
};
export const setUserRoot = (name: string) =>
  Navigation.setRoot({
    root: rootOp,
  });
