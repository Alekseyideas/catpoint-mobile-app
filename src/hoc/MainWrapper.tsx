import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const MainWrapper: React.FC = ({children}) => {
  return (
    <LinearGradient colors={['#74b9dc', '#003366']} style={styles.container}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
