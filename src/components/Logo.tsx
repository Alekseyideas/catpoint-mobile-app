import React from 'react';
import {StyleProp, Image, StyleSheet, ImageStyle} from 'react-native';
import LogoSrc from '../assets/images/logo.png';

interface LogoProps {
  imageStyle?: StyleProp<ImageStyle>;
}
export const Logo: React.FC<LogoProps> = ({imageStyle}) => {
  return <Image source={LogoSrc} style={[styles.image, imageStyle]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 145,
  },
});
