import AsyncStorage from '@react-native-community/async-storage';
import {Formik} from 'formik';
import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {Logo} from '../components/Logo';
import {
  CpText,
  CpInput,
  CpButtonGreen,
  CpButton,
  CpUnderlineTitle,
} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {ApplicationState} from '../store/applicationState';
import {signUpCompanyR} from '../store/Company/actions';
import {LOCAL_STORE, ROUTES} from '../utils/const';
import {ValidateEmail} from '../utils/helpers';
import {goTo} from '../utils/navigation';
import {TEXT} from '../utils/text';
import {stylesComp} from './CompLogin';

// interface RegisterCompanyProps {}
const companyName = 'companyName';
const address = 'address';
const firstName = 'name';
const position = 'position';
const email = 'email';
const phone = 'phone';
const pass = 'pass';
const pass2 = 'pass2';

export const RegisterCompany: React.FC<NavigationComponentProps> = ({
  componentId,
}) => {
  const {Company} = useSelector((store: ApplicationState) => store);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      if (Company.data) {
        await AsyncStorage.setItem(
          LOCAL_STORE.token,
          Company.data?.token || '',
        );
        await AsyncStorage.setItem(
          LOCAL_STORE.refToken,
          Company.data?.refreshToken || '',
        );
        await AsyncStorage.setItem(
          LOCAL_STORE.companyId,
          `${Company.data?.id || ''}`,
        );
        goTo({componentId, name: ROUTES.companyHome});
      }
    })();
  }, [Company.data, componentId]);
  return (
    <MainWrapper>
      <ScrollView style={{paddingTop: 40, flex: 1}}>
        <View style={[stylesComp.wrapper, {paddingBottom: 100}]}>
          <Logo imageStyle={{width: 110, height: 90}} />
          <View
            style={[stylesComp.scanTextWrapper, {minWidth: 230, width: 230}]}>
            <CpUnderlineTitle>
              не переймайся, залишилось не довго
            </CpUnderlineTitle>
          </View>
          <View style={stylesComp.inputWrapper}>
            <CpText
              newStyles={{
                textTransform: 'uppercase',
                textAlign: 'center',
                fontWeight: '600',
                color: 'black',
              }}>
              Заповни форми
            </CpText>
            <Formik
              initialValues={{
                [companyName]: 'CatPoint',
                [firstName]: 'Aleksey Company',
                [address]: 'Кондратьева, 154/1',
                [position]: 'Разаработчик',
                [email]: 'alekseyideas@gmail.com',
                [phone]: '0666632685',
                [pass]: '24071989',
                [pass2]: '24071989',
              }}
              onSubmit={(values) => {
                if (!values[companyName])
                  return Alert.alert(TEXT.titleError, TEXT.emailIsReq);
                if (!values[address])
                  return Alert.alert(TEXT.titleError, TEXT.passIsReq);
                if (!values[firstName])
                  return Alert.alert(TEXT.titleError, TEXT.passIsReq);
                if (!values[position])
                  return Alert.alert(TEXT.titleError, TEXT.passIsReq);
                if (!values[email])
                  return Alert.alert(TEXT.titleError, TEXT.emailIsReq);
                if (!ValidateEmail(values[email]))
                  return Alert.alert(TEXT.titleError, TEXT.emailIsWrong);
                if (!values[phone])
                  return Alert.alert(TEXT.titleError, TEXT.emailIsReq);
                if (!values[pass])
                  return Alert.alert(TEXT.titleError, TEXT.emailIsReq);
                if (values[pass] !== values[pass2])
                  return Alert.alert(TEXT.titleError, TEXT.emailIsReq);
                dispatch(
                  signUpCompanyR({
                    firstName: values[firstName],
                    name: values[companyName],
                    position: values[position],
                    phone: values[phone],
                    password: values[pass],
                    email: values[email],
                    address: values[address],
                  }),
                );
                return console.log('values', values);
              }}>
              {({handleChange, handleBlur, handleSubmit, values}) => (
                <>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(companyName)}
                      onBlur={handleBlur(companyName)}
                      value={values[companyName]}
                      placeholder="Назва компанії"
                    />
                  </View>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(address)}
                      onBlur={handleBlur(address)}
                      value={values[address]}
                      placeholder="Адреса знаходженя"
                    />
                  </View>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(firstName)}
                      onBlur={handleBlur(firstName)}
                      value={values[firstName]}
                      placeholder="Ім’я"
                    />
                  </View>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(position)}
                      onBlur={handleBlur(position)}
                      value={values[position]}
                      placeholder="Посада"
                    />
                  </View>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(email)}
                      onBlur={handleBlur(email)}
                      value={values[email]}
                      placeholder="Електрона пошта"
                    />
                  </View>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(phone)}
                      onBlur={handleBlur(phone)}
                      value={values[phone]}
                      placeholder="Номер телефона"
                    />
                  </View>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(pass)}
                      onBlur={handleBlur(pass)}
                      value={values[pass]}
                      placeholder="Пароль"
                      isPass
                    />
                  </View>
                  <View style={stylesComp.wrapperInput}>
                    <CpInput
                      onChange={handleChange(pass2)}
                      onBlur={handleBlur(pass2)}
                      value={values[pass2]}
                      placeholder="Підтвердети пароль"
                      isPass
                      onSubmitEditing={handleSubmit}
                    />
                  </View>
                  <View style={{marginTop: 50}}>
                    <CpButtonGreen
                      onPress={handleSubmit}
                      title="зареєструватись"
                      textStyle={{textTransform: 'uppercase'}}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({});
