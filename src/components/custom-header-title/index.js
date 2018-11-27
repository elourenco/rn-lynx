import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '100'
  }
});

export default ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text allowFontScaling={false} style={styles.title}>{title}</Text>
    <Text allowFontScaling={false} style={styles.subtitle}>{subtitle}</Text>
  </View>
);
