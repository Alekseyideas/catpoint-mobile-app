import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {Navigation} from 'react-native-navigation';
import {useSelector} from 'react-redux';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {LOGO_BASE_64, ROUTES} from '../utils/const';
import {HistoryListItem} from '../components/HistoryListItem';
import {UserInfo} from '../components/UserInfo';
import {ApplicationState} from '../store/applicationState';
import {globalStyles} from '../utils/globalStyles';
import {TEXT} from '../utils/text';

export const Home: React.FC = () => {
  const {User} = useSelector((store: ApplicationState) => store);

  React.useEffect(() => {
    // const ws = new WebSocket('ws://localhost:8011');
    // ws.onopen = () => {
    //   console.log(123123);
    //   ws.send('hello'); // send a message
    // };
    // ws.onmessage = (e) => {
    //   // a message was received
    //   // Alert.alert(e.data);
    //   console.log(111, e.data);
    // };
    // ws.onerror = (e) => {
    //   // an error occurred
    //   console.log(222, e.message);
    // };
    // ws.onclose = (e) => {
    //   console.log(e.code, e.reason);
    // };
    // // setTimeout(() => {
    // //   ws.close();
    // // }, 5000);
    // return () => ws.close();
  }, []);
  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{height: '100%', flex: 1}}>
          <View style={styles.wrapper}>
            <View style={{alignItems: 'center'}}>
              <Logo />
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
                <UserInfo uri={User.data?.image || ''} />
                <HistoryListItem
                  name="Тестова компанія"
                  currentPoints={9}
                  totalPoints={10}
                />
                <HistoryListItem
                  name="Тестова компанія 2"
                  currentPoints={2}
                  totalPoints={5}
                />
                <HistoryListItem
                  name="Тестова компанія 3"
                  currentPoints={7}
                  totalPoints={10}
                />
                <HistoryListItem
                  name="Тестова компанія 4"
                  currentPoints={4}
                  totalPoints={10}
                  disabelBorder
                />
                {/* <CpText newStyles={styles.scanText}>
                Скануй та отримуй поінти
              </CpText> */}
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
