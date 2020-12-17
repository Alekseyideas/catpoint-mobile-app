import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';

interface FreeCoffeeProps {}

export const FreeCoffee: React.FC<FreeCoffeeProps> = ({}) => {
  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}>
          <CpText
            newStyles={{
              color: '#fff',
              fontSize: 40,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Eeeeeeeeee !!! Кава в подарунок
          </CpText>
          <CpText
            newStyles={{
              marginTop: 20,
              color: '#fff',
              fontSize: 40,
              fontWeight: '600',
            }}>
            🎉🎉🎉🎉🎉🎉
          </CpText>
          <CpText
            newStyles={{
              marginTop: 20,
              color: '#fff',
              fontSize: 40,
              fontWeight: '600',
            }}>
            🧋🧋🧋🧋🧋
          </CpText>
        </View>
      </SafeAreaView>
    </MainWrapper>
  );
};
