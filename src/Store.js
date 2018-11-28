import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '@src/Reducers';
import loggerMiddleware from '@src/middlewares/LoggerMiddleware';
import authenticationMiddleware from '@src/middlewares/AuthenticationMiddleware';
import networkReachabilityMiddlware from '@src/middlewares/NetworkReachabilityMiddleware';
import crashReportMiddleware from '@src/middlewares/CrashReportMiddleware';

/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middlerwares = [
  thunkMiddleware,
  loggerMiddleware,
  authenticationMiddleware,
  networkReachabilityMiddlware,
  crashReportMiddleware
];

export default () => (createStore(reducers, composeEnhancers(applyMiddleware(...middlerwares))));
