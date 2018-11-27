import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '@src/Icons';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 16,
    justifyContent: 'center'
  }
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <Icon name="user-circle" color="#333333" size={28} />
  </View>
);
