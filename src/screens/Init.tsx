import React from 'react';
import {StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {MainWrapper} from '../hoc/MainWrapper';
import {goToRoot} from '../utils/navigation';
import {ROUTES} from '../utils/const';
// import {useFbLogin} from '../hooks/useFbLogin';
// import {COLORS} from '../utils/const';

export const Init: React.FC = () => {
  // const {startReq} = useFbLogin();

  const getLocalUser = React.useCallback(async () => {
    try {
      // await AsyncStorage.clear();
      const email = await AsyncStorage.getItem('email');
      console.log('Init:React.FC -> email', email);
      if (!email) return goToRoot(ROUTES.welcome);
      return goToRoot(ROUTES.home);
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
