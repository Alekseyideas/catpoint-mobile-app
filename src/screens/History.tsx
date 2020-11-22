import React from 'react';
import {FlatList, View, ScrollView, SafeAreaView} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';
import {LogoText} from '../components/LogoText';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {globalStyles} from '../utils/globalStyles';

export const History: React.FC<NavigationComponentProps> = ({componentId}) => {
  const [dataEx, setEx] = React.useState<{text: string}[]>([]);
  React.useEffect(() => {
    const navListenner = Navigation.events().registerComponentDidAppearListener(
      (nav) => {
        if (nav.componentId === componentId) {
          console.log(132123);
        }
      },
    );
    return () => navListenner.remove();
  }, [componentId]);
  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <View style={globalStyles.topWrapper}>
          <LogoText />
          <View style={globalStyles.whiteWrapper}>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ]}
              renderItem={({item}) => <CpText>{item.key}</CpText>}
            />
          </View>
        </View>
      </SafeAreaView>
    </MainWrapper>
  );
};
