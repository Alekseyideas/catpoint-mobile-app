import React from 'react';
import {View} from 'react-native';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

interface StockProps {}

export const Stock: React.FC<StockProps> = ({}) => {
  return (
    <MainWrapper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CpText newStyles={{color: '#fff'}}>Stock</CpText>
      </View>
    </MainWrapper>
  );
};
