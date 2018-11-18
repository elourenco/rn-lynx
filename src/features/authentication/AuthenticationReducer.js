import { SIGIN_SUCCESS } from './AuthenticationActions';

const initialState = {
  accessToken: null,
  refreshToken: null,
  avatar: null,
  name: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGIN_SUCCESS:
      return {
        ...state,
          accessToken: action.user.accessToken,
          avatar: action.user.avatar,
          name: action.user.name
        };
    default:
      return state;
  }
};
