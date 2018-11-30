import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default () => (
  <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size="small" />
  </View>
);
