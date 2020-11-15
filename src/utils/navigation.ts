import {Navigation} from 'react-native-navigation';
import HomeIcon from '../assets/images/home.png';
import BtnCatPoint from '../assets/images/btnCatPoint.png';
import {ROUTES} from './const';

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
            icon: HomeIcon,
          },
        },
      },
      // },
    },
  });
const defComp = {
  iconColor: '#75808C',
  animateBadge: true,
};
export const setUserRoot = (name: string) =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomTabsMain',
        // stack: {
        children: [
          {
            component: {
              name: ROUTES.home,
              options: {
                bottomTab: {
                  ...defComp,
                  icon: HomeIcon,
                  text: 'головна',
                },
              },
            },
          },
          // {
          //   component: {
          //     name: ROUTES.home,
          //     options: {
          //       bottomTab: {
          //         ...defComp,
          //         icon: HomeIcon,
          //         text: 'iсторiя',
          //       },
          //     },
          //   },
          // },
          // {
          //   component: {
          //     name: ROUTES.home,
          //     options: {
          //       bottomTab: {
          //         icon: BtnCatPoint,
          //         text: 'передбачення',
          //         iconInsets: {
          //           top: -45,
          //         },
          //       },
          //       overlay: {
          //         interceptTouchOutside: false,
          //       },
          //     },
          //   },
          // },
          // {
          //   component: {
          //     name: ROUTES.home,
          //     options: {
          //       bottomTab: {
          //         ...defComp,
          //         icon: HomeIcon,
          //         text: 'акцii',
          //       },
          //     },
          //   },
          // },
          // {
          //   component: {
          //     name: ROUTES.home,
          //     options: {
          //       bottomTab: {
          //         ...defComp,
          //         icon: HomeIcon,
          //         text: 'профiль',
          //       },
          //     },
          //   },
          // },
        ],

        options: {
          topBar: {
            visible: false,
          },
          bottomTab: {
            iconColor: '#F2F2F2',
          },
        },
      },
      // },
    },
  });
