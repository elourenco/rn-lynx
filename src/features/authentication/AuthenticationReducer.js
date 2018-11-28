import { SIGIN_SUCCESS } from './AuthenticationActions';

const initialState = () => {
  // const authentications = Authentication.data();
  // console.log(authentications);
  // if (authentications.length === 1) {
  //   return {
  //     accessToken: authentications[0].accessToken,
  //     refreshToken: authentications[0].refreshToken,
  //     avatar: authentications[0].avatar,
  //     name: authentications[0].name,
  //     id: authentications[0].id
  //   };
  // }
  return {
    accessToken: null,
    refreshToken: null,
    avatar: null,
    name: null,
    id: null
  };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case SIGIN_SUCCESS:
      return {
        ...state,
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
