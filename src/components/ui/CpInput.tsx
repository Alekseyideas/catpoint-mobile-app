import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputChangeEventData,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  Alert,
} from 'react-native';

interface CpInputProps {
  onChange: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder?: string;
  isPass?: boolean;
  onSubmitEditing?: () => void;
  error?: string;
  value: string;
}

export const CpInput: React.FC<CpInputProps> = ({
  onChange,
  value,
  placeholder,
  onBlur,
  onSubmitEditing,
  error,
  isPass,
}) => {
  return (
    <TextInput
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      style={styles.defInput}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={isPass}
    />
  );
};

const styles = StyleSheet.create({
  defInput: {
    // color: 'rgba(0,0,0,.2)',
    width: '100%',
    paddingVertical: 0,
    color: 'black',
    height: 30,
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
  },
});
