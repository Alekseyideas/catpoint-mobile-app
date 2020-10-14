import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CpText} from './CpText';

interface CpButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<ViewStyle>;
}

export const CpButton: React.FC<CpButtonProps> = ({
  title,
  onPress,
  textStyle,
  btnStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.defaultBtn, btnStyle]} onPress={onPress}>
      <CpText newStyles={[styles.cptext, textStyle]}>{title}</CpText>
    </TouchableOpacity>
  );
};
export const CpButtonGreen: React.FC<CpButtonProps> = ({
  title,
  onPress,
  textStyle,
  btnStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.greenBtn, btnStyle]} onPress={onPress}>
      <CpText newStyles={[styles.cptextWhite, textStyle]}>{title}</CpText>
    </TouchableOpacity>
  );
};

interface FaceBookBtnProps {
  title?: string;
  onPress: () => void;
}

export const FaceBookBtn: React.FC<FaceBookBtnProps> = ({title, onPress}) => {
  return (
    <LinearGradient colors={['#5272b8', '#3c5a9a']} style={styles.facebookBtn}>
      <TouchableOpacity onPress={onPress}>
        <CpText newStyles={[{color: 'white'}]}>{title || 'Facebook'}</CpText>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export const InstagramBtn: React.FC<FaceBookBtnProps> = ({title, onPress}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 0.6, 1]}
      angle={-2}
      angleCenter={{x: 0.5, y: 0.8}}
      useAngle
      colors={['#fed06e', '#dc2c72', '#9a38bb']}
      style={styles.facebookBtn}>
      <TouchableOpacity onPress={onPress}>
        <CpText newStyles={[{color: 'white'}]}>{title || 'Instagram'}</CpText>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const btnHeight = 45;
const btnRadius = 20;

const styles = StyleSheet.create({
  defaultBtn: {
    backgroundColor: 'white',
    minWidth: 180,
    height: btnHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: btnRadius,
  },
  greenBtn: {
    backgroundColor: 'rgb(51, 154, 0)',
    height: btnHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: btnRadius,
    color: '#fff',
  },
  cptextWhite: {
    color: 'white',
  },
  cptext: {
    color: 'black',
  },
  facebookBtn: {
    minWidth: 180,
    height: btnHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: btnRadius,
  },
});
