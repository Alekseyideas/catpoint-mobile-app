import React from 'react';
import {View} from 'react-native';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

export const History: React.FC = ({}) => {
  return (
    <MainWrapper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CpText newStyles={{color: '#fff'}}>History</CpText>
      </View>
    </MainWrapper>
  );
};
