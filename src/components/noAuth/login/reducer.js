import {DO_LOGIN_REQUEST, DO_LOGIN_REQUEST_COMMIT, DO_LOGIN_REQUEST_ROLLBACK} from './action-types';

export const initialState = {
  loggedIn: false,
  loginError: '',
  userId: null,
  access_token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN_REQUEST:
      return state;

    case DO_LOGIN_REQUEST_COMMIT:
      return {
        ...state,
        loggedIn: true,
        userId: action.payload.id,
        access_token: action.payload.access_token
      }
    
    case DO_LOGIN_REQUEST_ROLLBACK:
      return {
        ...initialState,
        loggedIn: false,
        loginError: action.payload.message
      }
    
    default:
      return state;
  }
}
