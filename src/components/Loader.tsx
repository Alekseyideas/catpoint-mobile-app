import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

interface LoaderProps {
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({color = '#fff'}) => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
    backgroundColor: 'rgba(47, 78, 109, 0.5)',
  },
});
