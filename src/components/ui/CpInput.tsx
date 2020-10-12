import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

interface CpInputProps {
  onChange: (e: any) => void;
  value: string;
}

export const CpInput: React.FC<CpInputProps> = ({onChange, value}) => {
  return (
    <View style={{width: '100%'}}>
      <TextInput onChange={onChange} value={value} style={styles.defInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  defInput: {
    color: 'rgba(0,0,0,.2)',
    width: '100%',
    height: 30,
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
  },
});
