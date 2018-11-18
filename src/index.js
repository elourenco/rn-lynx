import React from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '@src/Store';

import Application from '@features/application/Application';

const store = configureStore();

// https://github.com/facebook/react-native/issues/5267
Platform.OS === 'android'
    && UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);

export default () => (
  <Provider store={store}>
    <Application />
  </Provider>
);
