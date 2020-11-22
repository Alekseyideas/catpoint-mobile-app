import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../utils/globalStyles';
import {TEXT} from '../utils/text';
import {Logo} from './Logo';
import {CpText} from './ui';

export const LogoText: React.FC = () => {
  return (
    <>
      <Logo />
      <View style={globalStyles.scanTextWrapper}>
        <CpText newStyles={globalStyles.text18W}>{TEXT.scanAndGet}</CpText>
      </View>
    </>
  );
};
