import React from 'react';
import {FlatList, View, ScrollView, SafeAreaView} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';
import {LogoText} from '../components/LogoText';
import {CpText} from '../components/ui';
import {MainWrapper} from '../hoc/MainWrapper';
import {globalStyles} from '../utils/globalStyles';
import {compDidApear} from '../utils/navigationListenner';

export const HistoryPop: React.FC<NavigationComponentProps> = ({
  componentId,
}) => {
  const [dataEx, setEx] = React.useState<{text: string; key: string}[]>([]);
  React.useEffect(() => {
    const navListenner = compDidApear(componentId, () => {
      console.log(2, 'History');
      const data: {text: string; key: string}[] = [];
      for (let i = 0; i < 30; i += 1) {
        data.push({text: `Example shop name ${i}`, key: String(i)});
      }
      setEx(data);
    });
    return () => {
      console.log(111);
      return navListenner.remove();
    };
  }, [componentId]);
  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <View style={globalStyles.topWrapper}>
          <View style={[globalStyles.whiteWrapper]}>
            <FlatList
              data={dataEx}
              style={{paddingBottom: 300}}
              renderItem={({item}) => (
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom:
                      String(dataEx.length - 1) === item.key ? 250 : 0,
                  }}>
                  <CpText>{item.text}</CpText>
                  <CpText newStyles={{opacity: 0.5, fontSize: 12}}>
                    10.12.2020
                  </CpText>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </MainWrapper>
  );
};
