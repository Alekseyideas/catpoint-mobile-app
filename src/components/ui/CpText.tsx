import React from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';

interface CpTextProps {
  newStyles?: StyleProp<TextStyle>;
}
export const CpText: React.FC<CpTextProps> = ({children, newStyles}) => {
  return <Text style={[styles.cptext, newStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  cptext: {
    color: 'white',
    fontSize: 16,
  },
});