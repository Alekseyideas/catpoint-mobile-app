import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView, Alert} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {LOCAL_STORE} from '../utils/const';

export const CompanyHome: React.FC = () => {
  React.useEffect(() => {
    const ws = new WebSocket('ws://localhost:8011');

    ws.onopen = () => {
      console.log(123123);
      ws.send('hello'); // send a message
    };
    ws.onmessage = (e) => {
      // a message was received
      // Alert.alert(e.data);
      console.log(111, e.data);
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(222, e.message);
    };

    ws.onclose = (e) => {
      console.log(e.code, e.reason);
    };
    // setTimeout(() => {
    //   ws.close();
    // }, 5000);

    (async () => {
      const compId = await AsyncStorage.getItem(LOCAL_STORE.companyId);
      console.log('CompanyHome:React.FC -> compId', compId);
    })();
    return () => ws.close();
  }, []);
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
