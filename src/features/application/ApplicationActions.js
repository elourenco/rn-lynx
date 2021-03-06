import authenticationAction from '@features/authentication/AuthenticationActions';

export const APP_STATE_CHANGE = 'APP_STATE_CHANGE';
export const APP_CONNECTION_CHANGE = 'APP_CONNECTION_CHANGE';

const stateAction = {
  stateChange: status => ({ type: APP_STATE_CHANGE, status }),
  stateConnectionChange: connectionInfo => ({ type: APP_CONNECTION_CHANGE, connectionInfo })
};

export default {
  statusChange: status => dispatch => dispatch(stateAction.stateChange(status)),
  statusConnectionChange: connectionInfo => dispatch => dispatch(stateAction.stateConnectionChange(connectionInfo)),
  handleOpenURL: ({ url }) => dispatch => {
    const [, userString] = url.match(/user=([^#]+)/);
    const user = JSON.parse(decodeURI(userString));
    if (user) {
      dispatch(authenticationAction.handleSignInOpenURL(user));
    }
  }
};
