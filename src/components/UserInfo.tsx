import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

interface UserInfoProps {
  uri: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({uri}) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={{
          uri,
        }}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -70,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
