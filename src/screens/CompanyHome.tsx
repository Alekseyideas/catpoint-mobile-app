import React from 'react';
import {Navigation} from 'react-native-navigation';
import {useSelector} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  AppState,
  AppStateStatus,
} from 'react-native';
import LogoSrc from '../assets/images/logo-blue.png';
import {ApplicationState} from '../store/applicationState';
import {Logo} from '../components/Logo';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {LOCAL_STORE, ROUTES} from '../utils/const';

export const CompanyHome: React.FC = () => {
  const {Company, Token} = useSelector((store: ApplicationState) => store);
  const [isQrSca, setIsQrScan] = React.useState(false);
  // const [clientId, setClientId] = React.useState('');
  const [appState, setAppState] = React.useState(AppState.currentState);
  const ws = React.useRef<WebSocket | any>(null);

  const openConnection = () => {
    ws.current.onopen = () => {
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
  const handleError = () => {
    ws.current.onerror = (e: any) => {
      console.log(222, e.message);
    };
  };
  const handleClose = () => {
    ws.current.onclose = (e: any) => {
      console.log(e.code, e.reason);
    };
  };

  const handleAppState = React.useCallback(
    (nextAppState: AppStateStatus) => {
      if (appState.match(/background/) && nextAppState === 'active') {
        ws.current = new WebSocket('ws://3.16.152.215/ws');
        openConnection();
        handleError();
        // handlerMess();
        handleClose();
      }
      setAppState(nextAppState);
    },
    // eslint-disable-next-line
    [appState],
  );

  React.useEffect(() => {
    AppState.addEventListener('change', handleAppState);

    return () => AppState.removeEventListener('change', handleAppState);
  }, [handleAppState]);

  React.useEffect(() => {
    ws.current = new WebSocket('ws://3.16.152.215/ws');
    openConnection();
    handleError();
    // handlerMess();
    handleClose();
    return () => ws.current.close();
    // eslint-disable-next-line
  }, []);

  const onSuccess = (resp: any) => {
    if (!resp) return null;
    if (resp && !resp.data) return null;
    try {
      const data = JSON.parse(resp.data);
      if (!data.id) throw new Error('no id');
      if (!data.clientId) throw new Error('no clientId');
      ws.current.send(
        JSON.stringify({
          type: 'addPoint',
          data: {
            token: `bearer ${Token.data}`,
            userId: data.id,
            companyId: Company.data?.id,
            clientId: data.clientId,
          },
        }),
      );
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: ROUTES.successQrScan,
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsQrScan(false);
    }
    // console.error('An error occured', e);
  };
  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {isQrSca ? (
            <QRCodeScanner onRead={onSuccess} />
          ) : (
            <TouchableOpacity
              style={styles.btnScan}
              onPress={() => setIsQrScan(true)}>
              <Logo imageStyle={{width: 100, height: 82}} src={LogoSrc} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </MainWrapper>
  );
};

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
  btnScan: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});
