export const SIGIN_SUCCESS = 'SIGIN_SUCCESS';

const authenticationState = {
  stateSignIn: user => ({ type: SIGIN_SUCCESS, user })
};

const authenticationAction = {
  handleSignInOpenURL: user => dispatch => {
    dispatch(authenticationState.stateSignIn(user));
  }
};

export default authenticationAction;
