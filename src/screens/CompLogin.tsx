import React from 'react';
import {Formik} from 'formik';
import {Alert, StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {CpButton, CpButtonGreen, CpInput, CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {TEXT} from '../utils/text';
import {ValidateEmail} from '../utils/helpers';

interface CompLoginProps {
  t?: string;
}

const field1 = 'email';
const field2 = 'pass';

export const CompLogin: React.FC<CompLoginProps> = () => {
  return (
    <MainWrapper>
      <View style={stylesComp.wrapper}>
        <Logo imageStyle={{width: 110, height: 90}} />
        <View style={stylesComp.scanTextWrapper}>
          <CpText newStyles={stylesComp.scanText}>
            Ви обрали споціб входу як компанія
          </CpText>
        </View>
        <View style={stylesComp.inputWrapper}>
          <CpText
            newStyles={{
              textTransform: 'uppercase',
              textAlign: 'center',
              fontWeight: '600',
              color: 'black',
            }}>
            увійти
          </CpText>
          <Formik
            initialValues={{[field1]: '', [field2]: ''}}
            onSubmit={(values) => {
              if (!values[field1])
                return Alert.alert(TEXT.titleError, TEXT.emailIsReq);
              if (!values[field2])
                return Alert.alert(TEXT.titleError, TEXT.passIsReq);
              if (!ValidateEmail(values[field1]))
                return Alert.alert(TEXT.titleError, TEXT.emailIsWrong);
              return console.log('values', values);
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <>
                <View style={stylesComp.wrapperInput}>
                  <CpInput
                    onChange={handleChange(field1)}
                    onBlur={handleBlur(field1)}
                    value={values[field1]}
                    placeholder="E-mail"
                  />
                </View>
                <View style={stylesComp.wrapperInput}>
                  <CpInput
                    onChange={handleChange(field2)}
                    onBlur={handleBlur(field2)}
                    value={values[field2]}
                    placeholder="Password"
                    isPass
                    onSubmitEditing={handleSubmit}
                  />
                </View>
                <View style={{marginTop: 50}}>
                  <CpButtonGreen onPress={handleSubmit} title="УВIЙТИ" />
                </View>
              </>
            )}
          </Formik>
        </View>
        <View style={stylesComp.btnRegWrapper}>
          <CpButton
            onPress={() => console.log(123)}
            title="зареєструватись"
            textStyle={{textTransform: 'uppercase'}}
          />
        </View>
      </View>
    </MainWrapper>
  );
};

const constWrapperPadding = 30;
const constWrapperWidth = '80%';

export const stylesComp = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  scanTextWrapper: {
    marginTop: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    maxWidth: 190,
    textAlign: 'center',
    paddingBottom: 5,
  },
  inputWrapper: {
    width: constWrapperWidth,
    minHeight: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: constWrapperPadding,
    marginTop: 50,
  },
  btnRegWrapper: {
    width: constWrapperWidth,
    paddingHorizontal: constWrapperPadding,
    marginTop: 50,
  },
  wrapperInput: {
    marginTop: 20,
  },
});
