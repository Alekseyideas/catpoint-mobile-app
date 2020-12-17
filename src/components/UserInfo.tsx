import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Logo} from './Logo';
import {CpText} from './ui';

interface UserInfoProps {
  uri: string;
  name: string;
  totalCups: number;
}

export const UserInfo: React.FC<UserInfoProps> = ({uri, name, totalCups}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.outerAvatar}>
        <ImageBackground
          source={{
            uri,
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.nameWrapper}>
        <CpText newStyles={{color: 'white', fontWeight: '600', fontSize: 19}}>
          {name}
        </CpText>
        <View style={styles.cupWrapper}>
          <View style={styles.cupImg}>
            <Logo imageStyle={{width: 34, height: 25}} />
          </View>
          <View>
            <CpText
              newStyles={{fontSize: 11, color: '#000', fontWeight: '600'}}>
              Всього випито:
            </CpText>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <CpText
                newStyles={{fontSize: 35, color: '#000', fontWeight: '700'}}>
                {totalCups}
              </CpText>
              <CpText
                newStyles={{
                  fontSize: 12,
                  opacity: 0.6,
                  marginLeft: 2,
                  marginBottom: 5,
                }}>
                напоiв
              </CpText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const imgWidth = 110;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: -70,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cupWrapper: {
    marginTop: 30,
    flexDirection: 'row',
  },
  cupImg: {
    width: 50,
    height: 50,
    borderRadius: 150,
    marginRight: 10,
    backgroundColor: '#4F8EB6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerAvatar: {
    width: imgWidth,
    height: imgWidth,
    borderRadius: imgWidth,
    shadowColor: '#000',
    marginRight: 30,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  avatar: {
    width: imgWidth,
    height: imgWidth,
    borderRadius: imgWidth,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  nameWrapper: {
    width: '54%',
    marginTop: 10,
  },
});
