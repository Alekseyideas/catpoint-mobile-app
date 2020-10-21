import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import {MainWrapper} from '../hoc/MainWrapper';
import {goToRoot} from '../utils/navigation';
import {ROUTES} from '../utils/const';
import {callApi} from '../utils/callApi';
import {getUserR} from '../store/User/actions';
// import {useFbLogin} from '../hooks/useFbLogin';
// import {COLORS} from '../utils/const';
// AsyncStorage.clear();
export const Init: React.FC = () => {
  // const {startReq} = useFbLogin();
  const dispatch = useDispatch();
  const getLocalUser = React.useCallback(async () => {
    const goToScreen = async (data?: {
      token: string;
      refreshToken: string;
      id: string;
    }) => {
      if (data?.token && data?.refreshToken) {
        console.log(data, 'data.id');
        await AsyncStorage.setItem('token', data.token || '');
        await AsyncStorage.setItem('refreshToken', data.refreshToken || '');
        await AsyncStorage.setItem('userId', data.id || '');
        dispatch(
          getUserR(
            () => goToRoot(ROUTES.home),
            () => goToRoot(ROUTES.welcome),
          ),
        );
      } else {
        goToRoot(ROUTES.welcome);
      }
    };

    const hasTokenRoute = async (isExpired: boolean, refreshToken: string) => {
      if (isExpired) {
        try {
          const resp = await callApi({
            route: '/refresh-token',
            method: 'POST',
            data: {refreshToken},
          });
          return goToScreen(resp);
        } catch (e) {
          return goToRoot(ROUTES.welcome);
        }
      } else {
        return dispatch(
          getUserR(
            () => goToRoot(ROUTES.home),
            () => goToRoot(ROUTES.welcome),
          ),
        );
      }
    };

    try {
      const token = await AsyncStorage.getItem('token');
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const userId = await AsyncStorage.getItem('userId');
      console.log('Init:React.FC -> userId', userId);

      if (token && refreshToken) {
        const {exp} = jwtDecode(token);
        const isExpired = Date.now() >= exp * 1000;
        return hasTokenRoute(isExpired, refreshToken);
      }
      await AsyncStorage.clear();
      return goToRoot(ROUTES.welcome);
    } catch (e) {
      return Alert.alert('Error', 'Try again later');
    }
  }, []);

  React.useEffect(() => {
    getLocalUser();
  }, [getLocalUser]);
  return (
    <MainWrapper>
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
