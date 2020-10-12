import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {CpInput, CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

interface CompLoginProps {}

export const CompLogin: React.FC<CompLoginProps> = ({}) => {
  return (
    <MainWrapper>
      <View style={styles.wrapper}>
        <Logo />
        <View style={styles.scanTextWrapper}>
          <CpText newStyles={styles.scanText}>
            Ви обрали споціб входу як компанія
          </CpText>
        </View>
        <View style={styles.inputWrapper}>
          <CpInput
            onChange={(e: any) => console.log(e.nativeEvent.text)}
            value="123"
          />
        </View>
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
  scanText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  scanTextWrapper: {
    marginTop: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    maxWidth: 190,
    textAlign: 'center',
    paddingBottom: 5,
  },
  inputWrapper: {
    width: '80%',
    minHeight: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginTop: 50,
  },
});
