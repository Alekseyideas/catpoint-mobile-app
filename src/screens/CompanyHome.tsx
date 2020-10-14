import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

export const CompanyHome: React.FC = () => {
  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{height: '100%', flex: 1}}>
          <View style={styles.wrapper}>
            <View style={{alignItems: 'center'}}>
              <Logo />
              <View style={styles.scanTextWrapper}>
                <CpText newStyles={styles.scanText}>Comp</CpText>
              </View>
            </View>
          </View>
        </ScrollView>
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
});
