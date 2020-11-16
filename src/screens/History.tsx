import React from 'react';
import {View} from 'react-native';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

export const History: React.FC = ({}) => {
  return (
    <MainWrapper>
      <View>
        <CpText>History</CpText>
      </View>
    </MainWrapper>
  );
};
