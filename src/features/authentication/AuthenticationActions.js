import vasern from '@database/Vasern';

const { Authentication } = vasern;

export const SIGN_SUCCESS = 'SIGIN_SUCCESS';
export const SIGN_CHECK = 'SIGIN_CHECK';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_IN = 'SIGN_IN';

const state = {
  signSuccess: data => ({ type: SIGN_SUCCESS, data }),
  signIn: () => ({ type: SIGN_IN }),
  signOut: () => ({ type: SIGN_OUT }),
  signCheck: authented => ({ type: SIGN_CHECK, authented })
};

const action = {
  signIn: () => dispatch => (dispatch(state.signIn)),
  signCheck: () => dispatch => {
    const authented = Authentication.data().length === 1;
    dispatch(state.signCheck(authented));
  },
  signOut: () => dispatch => {
    Authentication.perform(db => {
      Authentication.data().forEach(item => {
        db.remove(item);
      });
      dispatch(state.signOut);
    });
  },
  handleSignInOpenURL: user => dispatch => {
    Authentication.perform(db => {
      Authentication.data().forEach(item => {
        db.remove(item);
      });
      const userDb = db.insert(user, true)[0];
      dispatch(state.signSuccess(userDb));
    });
  }
};

export default action;
