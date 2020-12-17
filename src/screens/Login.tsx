/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationComponentProps} from 'react-native-navigation';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Logo} from '../components/Logo';
import {CpText, FaceBookBtn, InstagramBtn} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {goTo, setUserRoot} from '../utils/navigation';
import {LOCAL_STORE, ROUTES} from '../utils/const';
import {TEXT} from '../utils/text';
import {signInR} from '../store/User/actions';
import {ApplicationState} from '../store/applicationState';
import {setToken} from '../store/Token/actions';
import {Loader} from '../components/Loader';

interface LoginProps extends NavigationComponentProps {
  num?: string;
}
export const Login: React.FC<LoginProps> = ({componentId}) => {
  const {User} = useSelector((store: ApplicationState) => store);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (User.data) {
      (async () => {
        await AsyncStorage.setItem(LOCAL_STORE.token, User.data?.token || '');
        await AsyncStorage.setItem(
          LOCAL_STORE.refToken,
          // 'refreshToken',
          User.data?.refreshToken || '',
        );
        await AsyncStorage.setItem(
          LOCAL_STORE.userId,
          `${User.data?.id || ''}`,
        );
        dispatch(setToken(User.data?.token || ''));
        setUserRoot(ROUTES.home);
        // goTo({componentId, name: ROUTES.home});
      })();
    }
  }, [User.data, componentId, dispatch]);
  const responseInfoCallback = async (
    error: object | undefined,
    result:
      | {
          email?: string;
          first_name?: string;
          last_name?: string;
          picture?: {
            data: {
              url: string;
            };
          };
          id?: string;
        }
      | undefined,
  ) => {
    if (error) {
      console.log('Error fetching data: ', error);
      Alert.alert(TEXT.titleError, TEXT.tryAgainLater);
    } else {
      console.log(result);
      if (result) {
        const {
          id,
          picture,
          email,
          last_name: lastName,
          first_name: firstName,
        } = result;
        dispatch(
          signInR({
            appId: id || '',
            image: picture?.data.url || '',
            lastName: lastName || '',
            firstName: firstName || '',
            email: email || '',
          }),
        );
      }
    }
    setIsLoading(false);
  };

  const infoRequest = new GraphRequest(
    '/me',
    {
      parameters: {
        fields: {
          string:
            'id,email,name,first_name,middle_name,last_name,picture.type(large)',
        },
      },
    },
    responseInfoCallback,
  );

  return (
    <MainWrapper>
      {isLoading ? <Loader /> : null}
      <View style={styles.wrapper}>
        <Logo imageStyle={styles.logo} />
        <View style={styles.btnsWrapper}>
          <CpText newStyles={styles.titleBlock}>почати збирати поінти</CpText>
          {/* <View style={{marginBottom: 20}}>
            <InstagramBtn onPress={LoginManager.logOut} />
          </View> */}
          <FaceBookBtn
            onPress={async (): Promise<boolean> => {
              setIsLoading(true);
              try {
                const result = await LoginManager.logInWithPermissions([
                  'public_profile',
                  'email',
                ]);
                if (result.isCancelled) {
                  console.log('Login cancelled');
                  setIsLoading(false);
                } else {
                  console.log(result);
                  new GraphRequestManager().addRequest(infoRequest).start();
                }
              } catch (e) {
                console.log('Login fail with error: ', e);
                setIsLoading(false);
              }
              return true;
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => goTo({componentId, name: ROUTES.compLogin})}>
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
    color: 'white',
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
