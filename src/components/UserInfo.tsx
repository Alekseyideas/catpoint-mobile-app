import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

export const UserInfo: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={{
          uri:
            'https://scontent.fhrk6-1.fna.fbcdn.net/v/t1.0-9/60306694_4126301994086490_7983847730814386176_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=6-pTB-9Sl6AAX_U3MBm&_nc_oc=AQnath08RHlwasulFDxcViH_czFq9RfNFmPWDDmBGSbF537fvZr_VSL87HVrJiAuMSY&_nc_ht=scontent.fhrk6-1.fna&oh=54c11222a1eb6b494d538cc20a758d69&oe=5FA604FA',
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
