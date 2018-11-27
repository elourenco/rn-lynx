import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '@src/Reducers';
import loggerMiddleware from '@src/middlewares/LoggerMiddleware';
import authenticationMiddleware from '@src/middlewares/AuthenticationMiddleware';
import networkReachabilityMiddlware from '@src/middlewares/NetworkReachabilityMiddleware';
import crashReportMiddleware from '@src/middlewares/CrashReportMiddleware';

const middlerwares = [
  thunkMiddleware,
  loggerMiddleware,
  authenticationMiddleware,
  networkReachabilityMiddlware,
  crashReportMiddleware
];

export default () => (createStore(reducers, applyMiddleware(...middlerwares)));
