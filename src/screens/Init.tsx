import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {MainWrapper} from '../hoc/MainWrapper';
import {useFbLogin} from '../hooks/useFbLogin';
import {COLORS} from '../utils/const';

export const Init: React.FC = () => {
  const {startReq} = useFbLogin();

  React.useEffect(() => {
    startReq();
  }, [startReq]);
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
