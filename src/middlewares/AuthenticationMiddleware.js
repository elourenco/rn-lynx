import { SIGN_SUCCESS } from '@features/authentication/AuthenticationActions'
import Browser from '@components/browser';

export default store => next => action => {
  if (action.type === SIGN_SUCCESS) {
    Browser.dismiss();
  }
  next(action);
};
