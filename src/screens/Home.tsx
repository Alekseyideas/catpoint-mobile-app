/* eslint no-underscore-dangle: ["error", { "allow": ["__company__"] }]*/
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationComponentProps} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {LOGO_BASE_64, ROUTES} from '../utils/const';
import {HistoryListItem} from '../components/HistoryListItem';
import {UserInfo} from '../components/UserInfo';
import {ApplicationState} from '../store/applicationState';
import {globalStyles} from '../utils/globalStyles';
import {TEXT} from '../utils/text';
import MenuIcon from '../assets/images/menuIcon.png';
import {goTo} from '../utils/navigation';
// import {useSocket} from '../hooks/useSocket';
import {
  setUserCompanies,
  updateUserCompanies,
  TCompPoint,
} from '../store/Companies/actions';
import {TCompaniesState, TUserCompany} from '../store/Companies/types';
import {useSocket} from '../hooks/useSocket';

// interface TCompPoint extends TUserCompany {
//   isComplite?: boolean;
// }
// const addPointHandler = (
//   com: TCompaniesState['data'],
//   comPoint: TCompPoint,
// ): TUserCompany[] => {
//   console.log(com, 'com');
//   const compData = [...com];
//   const index = compData.findIndex((obj) => obj.id === comPoint.id);
//   /* eslint no-param-reassign: ["error", { "props": false }] */
//   delete comPoint.isComplite;
//   console.log(comPoint, 'comPoint data');
//   if (index || index === 0) {
//     compData[index] = {...comPoint};
//   } else {
//     compData.push(comPoint);
//   }

//   console.log(compData, 'compData');
//   return compData;
// };

export const Home: React.FC<NavigationComponentProps> = ({componentId}) => {
  const {User, Companies, Token} = useSelector(
    (store: ApplicationState) => store,
  );
  const ws = React.useRef<WebSocket | any>(null);
  const dispatch = useDispatch();

  const openConnection = () => {
    ws.current.onopen = () => {
      ws.current.send(
        JSON.stringify({
          type: 'getUserCompanies',
          data: {
            token: `bearer ${Token.data}`,
          },
        }),
      );
      ws.current.send(
        JSON.stringify({
          type: 'getKey',
          data: {
            token: `bearer ${Token.data}`,
          },
        }),
      );
    };
  };

  const handlerMess = () => {
    ws.current.onmessage = async (e) => {
      const resp: {
        type: 'getKey' | 'getCompanies' | 'getUserCompanies' | 'addPoint';
        data: any | null;
      } = JSON.parse(e.data);

      switch (resp.type) {
        case 'getKey':
          console.log(resp.data, 'resp.data');
          // setUserId(resp.data?.clientId || '');
          break;
        case 'addPoint':
          console.log(resp.data, 'resp.data addPoint');

          dispatch(updateUserCompanies({comp: resp.data}));
          break;
        case 'getUserCompanies':
          dispatch(setUserCompanies({companies: resp.data as TUserCompany[]}));
          break;
        default:
          break;
      }
      // getComp(userId);
    };
  };

  const handleError = () => {
    ws.current.onerror = (e) => {
      // an error occurred
      console.log(222, e.message);
    };
  };
  const handleClose = () => {
    ws.current.onclose = (e) => {
      console.log(e.code, e.reason);
    };
  };

  React.useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8011');
    openConnection();
    handleError();
    handlerMess();
    handleClose();
    return () => ws.current.close();
  }, []);

  // React.useEffect(() => {
  //   if (userId) {
  //     console.log();
  //     AsyncStorage.getItem('token').then((token) => {
  //       ws.current.send(
  //         JSON.stringify({
  //           type: 'getCompanies',
  //           data: {
  //             token,
  //             userId,
  //           },
  //         }),
  //       );
  //     });
  //   }
  //   // eslint-disable-next-line
  // }, [userId]);

  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{height: '100%', flex: 1}}>
          <View style={styles.wrapper}>
            <View style={{alignItems: 'center'}}>
              <Logo imageStyle={{width: 80, height: 65}} />
              <View style={globalStyles.scanTextWrapper}>
                <CpText newStyles={globalStyles.text18W}>
                  {TEXT.scanAndGet}
                </CpText>
              </View>
              <View style={styles.qrWrapper}>
                <QRCode
                  size={180}
                  value={`${User.data?.id}`}
                  logo={{uri: LOGO_BASE_64}}
                  logoSize={30}
                  logoBackgroundColor="black"
                />
              </View>
            </View>

            <View style={{width: '90%', marginTop: 100}}>
              <View style={styles.lastVisitsWrapper}>
                <UserInfo
                  uri={User.data?.image || ''}
                  name={`${User.data?.firstName} ${User.data?.lastName}`}
                />
                {Companies.data &&
                  Companies.data[0] &&
                  Companies.data.map((comp) => {
                    return (
                      <HistoryListItem
                        key={comp.id}
                        name={comp.__company__.name}
                        currentPoints={comp.points}
                        totalPoints={comp.__company__.totalPoints}
                      />
                    );
                  })}

                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    style={{marginTop: 10}}
                    onPress={() => {
                      goTo({componentId, name: ROUTES.historyPop});
                    }}>
                    <Image
                      style={{width: 20, height: 15}}
                      width={20}
                      height={15}
                      source={MenuIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </MainWrapper>
  );
};

// Navigation.showOverlay({
//   component: {
//     id: 'Footer',
//     name: ROUTES.footer,
//     passProps: {},
//     options: {
//       overlay: {
//         interceptTouchOutside: false,
//       },
//     },
//   },
// });

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  scanText: {
    fontSize: 18,
    color: 'white',
  },
  scanTextWrapper: {
    marginTop: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  qrWrapper: {
    width: 220,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  lastVisitsWrapper: {
    width: '100%',
    minHeight: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },

  testBtn: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -20,
    left: '50%',
    zIndex: 999,
  },
});
