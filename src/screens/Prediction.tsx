import React from 'react';
import {View} from 'react-native';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

interface PredictionProps {}

export const Prediction: React.FC<PredictionProps> = ({}) => {
  return (
    <MainWrapper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CpText newStyles={{color: '#fff'}}>Prediction</CpText>
      </View>
    </MainWrapper>
  );
};
