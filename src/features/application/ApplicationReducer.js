import { AppState } from 'react-native';
import { APP_STATE_CHANGE, APP_CONNECTION_CHANGE } from './ApplicationActions';

const initialState = {
  status: AppState.currentState,
  deviceToken: null,
  connectionInfo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_CONNECTION_CHANGE:
      return { ...state, connectionInfo: action.connectionInfo };

    case APP_STATE_CHANGE:
      return { ...state, status: action.status };

    default:
      return state;
  }
};
