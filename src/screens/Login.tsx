import React from 'react';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText, FaceBookBtn, InstagramBtn} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

export const Login: React.FC = () => {
  const responseInfoCallback = (
    error: object | undefined,
    result: {name?: string} | undefined,
  ): any => {
    if (error) {
      console.log('Error fetching data: ', error);
    } else {
      console.log(result);
    }
  };

  const infoRequest = new GraphRequest(
    '/me',
    {
      parameters: {
        fields: {
          string: 'email,name,first_name,middle_name,last_name,picture{url}',
        },
      },
    },
    responseInfoCallback,
  );

  return (
    <MainWrapper>
      <View style={styles.wrapper}>
        <Logo imageStyle={styles.logo} />
        <View style={styles.btnsWrapper}>
          <CpText newStyles={styles.titleBlock}>почати збирати поінти</CpText>
          <View style={{marginBottom: 20}}>
            <InstagramBtn onPress={LoginManager.logOut} />
          </View>
          <FaceBookBtn
            onPress={async (): Promise<boolean> => {
              try {
                const result = await LoginManager.logInWithPermissions([
                  'public_profile',
                ]);
                if (result.isCancelled) {
                  console.log('Login cancelled');
                } else {
                  new GraphRequestManager().addRequest(infoRequest).start();
                }
              } catch (e) {
                console.log('Login fail with error: ', e);
              }
              return true;
            }}
          />
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
