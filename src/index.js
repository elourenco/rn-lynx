import React from 'react';
import { Platform, UIManager, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '@src/Store';
import moment from 'moment';
import 'moment/locale/pt-br';

import Application from '@features/application/Application';

const store = configureStore();

moment.locale('pt-br');

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', // works
  'Module RCTImageLoader', // works
  'Require cycle:', // doesn't work
])

Platform.OS === 'android'
    && UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);

export default () => (
  <Provider store={store}>
    <Application />
  </Provider>
);
