import Authentication from '@database/models/Authentication';

export const SIGIN_SUCCESS = 'SIGIN_SUCCESS';

const authenticationState = {
  stateSignIn: data => ({ type: SIGIN_SUCCESS, data })
};

const authenticationAction = {
  handleSignInOpenURL: user => dispatch => {
    dispatch(authenticationState.stateSignIn(user));
  }
};

export default authenticationAction;
