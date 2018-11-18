import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '@src/Reducers';

const logger = createLogger({
  collapsed: true,
  duration: true
});

export default () => {
  const middlerwares = applyMiddleware(thunk, logger);
  const store = createStore(reducers, middlerwares);

  return store;
};
