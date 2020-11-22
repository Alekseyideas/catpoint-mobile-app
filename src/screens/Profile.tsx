import React from 'react';
import {View} from 'react-native';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <MainWrapper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CpText newStyles={{color: '#fff'}}>Profile</CpText>
      </View>
    </MainWrapper>
  );
};
