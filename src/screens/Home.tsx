import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

export const Home: React.FC = ({}) => {
  return (
    <MainWrapper>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Logo />
        <View style={styles.scanTextWrapper}>
          <CpText newStyles={styles.scanText}>Скануй та отримуй поінти</CpText>
        </View>
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  scanText: {
    fontSize: 18,
  },
  scanTextWrapper: {
    marginTop: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});
