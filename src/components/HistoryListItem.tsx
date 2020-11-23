import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CpText} from './ui';

interface HistoryListItemProps {
  name: string;
  currentPoints: number;
  totalPoints: number;
  disabelBorder?: boolean;
}

export const HistoryListItem: React.FC<HistoryListItemProps> = ({
  name,
  currentPoints,
  totalPoints,
  disabelBorder,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {borderBottomColor: disabelBorder ? '#fff' : 'rgba(0, 0, 0, 0.2)'},
      ]}>
      <View style={styles.nameWrapper}>
        <CpText newStyles={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>
          {name}
        </CpText>
      </View>
      <View style={styles.progressWrapper}>
        <View style={styles.pointTextWrapper}>
          <CpText newStyles={{fontSize: 12}}>
            {currentPoints} поінтів з {totalPoints}
          </CpText>
          <CpText
            newStyles={{fontSize: 12, fontWeight: '700', color: '#ffcd03'}}>
            FREE
          </CpText>
        </View>

        <View style={styles.progress}>
          <View
            style={[
              styles.progressActive,
              {width: `${(currentPoints / totalPoints) * 100}%`},
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  nameWrapper: {
    width: '45%',
  },
  progressWrapper: {
    paddingBottom: 3,
    width: '54%',
  },
  progress: {
    width: '100%',
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  progressActive: {
    height: '100%',
    width: 0,
    borderRadius: 10,
    backgroundColor: '#02c93b',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  pointTextWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
