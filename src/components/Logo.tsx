import React from 'react';
import {StyleProp, Image, StyleSheet, ImageStyle} from 'react-native';
import LogoSrc from '../assets/images/logo.png';

interface LogoProps {
  imageStyle?: StyleProp<ImageStyle>;
  src?: string;
}
export const Logo: React.FC<LogoProps> = ({imageStyle, src = LogoSrc}) => {
  return <Image source={src} style={[styles.image, imageStyle]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 145,
  },
});
