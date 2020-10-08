import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText, FaceBookBtn, InstagramBtn} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

export const Login: React.FC = () => {
  return (
    <MainWrapper>
      <View style={styles.wrapper}>
        <Logo imageStyle={styles.logo} />
        <View style={styles.btnsWrapper}>
          <CpText newStyles={styles.titleBlock}>почати збирати поінти</CpText>
          <View style={{marginBottom: 20}}>
            <InstagramBtn onPress={() => console.log(2)} />
          </View>
          <FaceBookBtn onPress={() => console.log(1)} />
        </View>
        <TouchableOpacity>
          <CpText newStyles={styles.textAsComp}>увійти, як компанія</CpText>
        </TouchableOpacity>
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: '20%',
  },

  textAsComp: {
    textAlign: 'center',
  },
  logo: {
    width: 105,
    height: 85,
    marginBottom: '40%',
  },
  btnsWrapper: {
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 30,
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  titleBlock: {
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
});
