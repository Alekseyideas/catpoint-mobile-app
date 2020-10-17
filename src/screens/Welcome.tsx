import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationComponentProps} from 'react-native-navigation';
import {View, StyleSheet, Image} from 'react-native';
import {CpButton, CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import Logo from '../assets/images/logo.png';
import {ROUTES} from '../utils/const';
import {goTo} from '../utils/navigation';

interface WelocomeProps extends NavigationComponentProps {
  num?: string;
}
export const Welcome: React.FC<WelocomeProps> = (props) => {
  React.useEffect(() => {
    (async () => {
      const d = await AsyncStorage.getItem('token');
      console.log('d', d);
    })();
  }, []);
  return (
    <MainWrapper>
      <View style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.circle} />
        <CpText newStyles={{color: '#fff'}}>пий каву</CpText>
        <View style={styles.circle} />
        <CpText newStyles={{color: '#fff'}}>збирай поінти</CpText>
        <View style={styles.circle} />
        <CpText newStyles={{color: '#fff'}}>отримуй плюшки</CpText>
        <View style={styles.btnWrapper}>
          <CpButton
            title="ДАЛI"
            onPress={(): Promise<string> =>
              goTo({componentId: props.componentId, name: ROUTES.login})
            }
          />
        </View>
      </View>
    </MainWrapper>
  );
};

const circleSize = 8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    backgroundColor: 'white',
    borderRadius: circleSize,
    marginVertical: 15,
  },
  btnWrapper: {
    marginTop: 40,
  },
  image: {
    width: 180,
    height: 145,
    marginBottom: 20,
  },
});
