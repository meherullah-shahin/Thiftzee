import { LOGGED_IN, LOGGING_IN, LOGIN_FAILED } from "../actions/login";

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  loginFailed: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGGED_IN:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false,
        loginFailed: true
      };
    default:
      return state;
  }
};

export const loginReducer = state => state.login;

export default login;
