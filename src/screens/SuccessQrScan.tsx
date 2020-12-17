import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

interface SuccessQrScanProps {}

export const SuccessQrScan: React.FC<SuccessQrScanProps> = ({}) => {
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
          <CpText newStyles={{color: '#fff', fontSize: 40, fontWeight: '600'}}>
            Зараховано !!!
          </CpText>
        </View>
      </SafeAreaView>
    </MainWrapper>
  );
};
