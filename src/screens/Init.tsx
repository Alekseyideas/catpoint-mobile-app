import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import {MainWrapper} from '../hoc/MainWrapper';
import {goToRoot} from '../utils/navigation';
import {LOCAL_STORE, ROUTES} from '../utils/const';
import {callApi} from '../utils/callApi';
import {getUserR} from '../store/User/actions';
import {getCompanyR} from '../store/Company/actions';
// import {useFbLogin} from '../hooks/useFbLogin';
// import {COLORS} from '../utils/const';
// AsyncStorage.clear();
export const Init: React.FC = () => {
  // const {startReq} = useFbLogin();
  const dispatch = useDispatch();
  const getLocalUser = React.useCallback(async () => {
    const getRequestLogic = (isCompany: boolean) => {
      if (isCompany) {
        dispatch(
          getCompanyR({
            callbackSuccess: () => goToRoot(ROUTES.companyHome),
            callbackError: () => goToRoot(ROUTES.welcome),
          }),
        );
      } else {
        dispatch(
          getUserR(
            () => goToRoot(ROUTES.home),
            () => goToRoot(ROUTES.welcome),
          ),
        );
      }
    };

    const goToScreen = async (data?: {
      token: string;
      refreshToken: string;
      id: string;
      isCompany: boolean;
    }) => {
      if (data?.token && data?.refreshToken) {
        await AsyncStorage.setItem(LOCAL_STORE.token, data.token || '');
        await AsyncStorage.setItem(
          LOCAL_STORE.refToken,
          data.refreshToken || '',
        );
        await AsyncStorage.setItem(
          data?.isCompany ? LOCAL_STORE.companyId : LOCAL_STORE.userId,
          `${data.id}` || '',
        );

        getRequestLogic(data.isCompany);
      } else {
        goToRoot(ROUTES.welcome);
      }
    };

    const hasTokenRoute = async (
      // isExpired: boolean,
      refreshToken: string,
      isCompany: boolean,
    ) => {
      try {
        const resp = await callApi({
          route: '/refresh-token',
          method: 'POST',
          data: {refreshToken},
        });
        return goToScreen({...resp, isCompany});
      } catch (e) {
        return goToRoot(ROUTES.welcome);
      }
      // if (isExpired) {
      //   try {
      //     const resp = await callApi({
      //       route: '/refresh-token',
      //       method: 'POST',
      //       data: {refreshToken},
      //     });
      //     return goToScreen({...resp, isCompany});
      //   } catch (e) {
      //     return goToRoot(ROUTES.welcome);
      //   }
      // } else {
      //   return getRequestLogic(isCompany);
      // }
    };

    try {
      const token = await AsyncStorage.getItem(LOCAL_STORE.token);
      console.log('Init:React.FC -> token', token);
      const refreshToken = await AsyncStorage.getItem(LOCAL_STORE.refToken);
      const userId = await AsyncStorage.getItem(LOCAL_STORE.userId);
      const companyId = await AsyncStorage.getItem(LOCAL_STORE.companyId);
      console.log('Init:React.FC -> userId', userId);
      console.log('Init:React.FC -> companyId', companyId);

      if (token && refreshToken) {
        // const {exp} = jwtDecode(token);
        // const isExpired = Date.now() >= exp * 1000;
        return hasTokenRoute(refreshToken, !!companyId);
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
