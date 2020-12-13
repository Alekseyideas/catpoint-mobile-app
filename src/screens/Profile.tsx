import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Logo} from '../components/Logo';
import {LogoText} from '../components/LogoText';
import {CpText} from '../components/ui';
import {UserInfo} from '../components/UserInfo';
import {MainWrapper} from '../hoc/MainWrapper';
import {ApplicationState} from '../store/applicationState';
import {TUser} from '../store/User/types';
import {globalStyles} from '../utils/globalStyles';
import {TEXT} from '../utils/text';
import {goToRoot} from '../utils/navigation';
import {ROUTES} from '../utils/const';

const WrapperProfileLinks: React.FC = () => {
  const linkData = [
    {
      title: 'Персональна iнформацiя',
      id: 1,
      onPress: () => console.log('test'),
    },
    {
      title: 'Бонуси',
      id: 2,
      onPress: () => console.log('test'),
    },
    {
      title: 'CatПоiнти',
      id: 3,
      onPress: () => console.log('test'),
    },
    {
      title: 'Ква`ярнi',
      id: 4,
      onPress: () => console.log('test'),
    },
    {
      title: 'Пiдтримка',
      id: 5,
      onPress: () => console.log('test'),
    },
    {
      title: 'Про CatPoint',
      id: 6,
      onPress: () => console.log('test'),
    },
    {
      title: 'Вийти',
      id: 7,
      onPress: async () => {
        await AsyncStorage.clear();
        goToRoot(ROUTES.welcome);
      },
    },
  ];
  return (
    <View>
      {linkData.map((l) => (
        <TouchableOpacity
          key={l.id}
          style={styles.styleLink}
          onPress={l.onPress}>
          <CpText newStyles={{color: '#000'}}>{l.title}</CpText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

interface WrapperProfileProps {
  user: TUser | null;
}
const WrapperProfile: React.FC<WrapperProfileProps> = React.memo(({user}) => {
  if (!user)
    return (
      <View style={styles.userWrapper}>
        <CpText>No data</CpText>
      </View>
    );
  return (
    <View style={styles.userWrapper}>
      <View style={styles.userInfoWrapper}>
        <View style={styles.avatarWrapper}>
          <ImageBackground
            source={{
              uri: user.image,
            }}
            style={styles.avatar}
          />
        </View>

        <View>
          <CpText newStyles={styles.nameWrapper}>
            {user.firstName} {user.lastName}
          </CpText>
          <CpText newStyles={{marginTop: 5, fontSize: 12}}>
            Нема iнформацii
          </CpText>
        </View>
      </View>
    </View>
  );
});

export const Profile: React.FC = () => {
  const {User} = useSelector((store: ApplicationState) => store);

  return (
    <MainWrapper>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{height: '100%', flex: 1}}>
          <View style={globalStyles.topWrapper}>
            <LogoText />

            <View style={globalStyles.whiteWrapper}>
              <WrapperProfile user={User.data} />
              <WrapperProfileLinks />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  userWrapper: {},

  userInfoWrapper: {
    flexDirection: 'row',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 150,
    shadowColor: '#000',
    marginRight: 30,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },

  nameWrapper: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
  },
  styleLink: {
    color: '#000',
    marginTop: 40,
  },
});
