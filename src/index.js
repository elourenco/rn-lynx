import React from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '@src/Store';
import moment from 'moment';
import 'moment/locale/pt-br';
import Application from '@features/application/Application';

const store = configureStore();

moment.locale('pt-br');

Platform.OS === 'android'
    && UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);

export default () => (
  <Provider store={store}>
    <Application />
  </Provider>
);
