import { combineReducers } from 'redux';
import application from '@features/application/ApplicationReducer';
import authentication from '@features/authentication/AuthenticationReducer';

export default combineReducers({
  application,
  authentication,
  profile: {}
});
