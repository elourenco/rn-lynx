import vasern from '@database/Vasern';

export const SIGN_SUCCESS = 'SIGN_SUCCESS';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_IN = 'SIGN_IN';

const state = {
  signSuccess: data => ({ type: SIGN_SUCCESS, data }),
  signIn: () => ({ type: SIGN_IN }),
  signOut: () => ({ type: SIGN_OUT })
};

const action = {
  signIn: () => dispatch => (dispatch(state.signIn)),
  signCheck: () => dispatch => {
    const { Authentication } = vasern;
    const authented = Authentication.data();
    if (authented.length === 1) {
      dispatch(state.signSuccess(authented[0]));
    }
  },
  signOut: () => dispatch => {
    const { Authentication } = vasern;
    Authentication.perform(db => {
      Authentication.data().forEach(item => {
        db.remove(item);
      });
      dispatch(state.signOut);
    });
  },
  handleSignInOpenURL: user => dispatch => {
    const { Authentication } = vasern;
    Authentication.perform(db => {
      Authentication.data().forEach(item => {
        db.remove(item);
      });
      const userDb = db.insert(user)[0];
      dispatch(state.signSuccess(userDb));
    });
  }
};

export default action;
