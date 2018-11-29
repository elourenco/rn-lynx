import { SIGN_SUCCESS, SIGN_CHECK, SIGN_OUT } from './AuthenticationActions';

const initialState = () => ({
  accessToken: null,
  refreshToken: null,
  avatar: null,
  name: null,
  isAuthented: false,
  id: null
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case SIGN_OUT:
      return {
        ...state,
        isAuthented: false
      };

    case SIGN_CHECK:
      return {
        ...state,
        isAuthented: action.authented
      };

    case SIGN_SUCCESS:
      return {
        ...state,
        isAuthented: true,
        refreshToken: action.data.refreshToken,
        accessToken: action.data.accessToken,
        avatar: action.data.avatar,
        name: action.data.name,
        id: action.data.id
      };

    default:
      return state;
  }
};
