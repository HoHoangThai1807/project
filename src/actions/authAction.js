import { setError } from './errorAction';
import { signup, auth } from '../utils/api';
import { setPersisted, removePersisted } from '../utils/persistState';
// rename functions that have *Action
export const signupAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(signupState('SIGNUP_STATE_RESET', null));
      dispatch(setIsSigningUp(true));
      await signup(payload);
      dispatch(setIsSigningUp(false));
      dispatch(signupState('SIGNUP_STATE_SUCCESS', true));
    } catch (error) {
      dispatch(setError('SIGN_UP_ERROR', error.message));
      dispatch(setIsSigningUp(false));
      dispatch(signupState('SIGNUP_STATE_FAILED', false));
    }
  }
};

export const signInAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setIsSigningIn(true));
      const result = await auth(payload);
      dispatch(setAuth(result.data));
      dispatch(setIsSigningIn(false));
      setPersisted({
        name: 'auth',
        state: result.data,
      });
    } catch (error) {
      dispatch(setError('SIGN_IN_ERROR', error.message));
      dispatch(setIsSigningIn(false));
    }
  }
};

export const persistedSignInAction = (payload) => {
  return (dispatch) => {
    try {
      dispatch(setIsSigningIn(true));
      dispatch(setAuth(payload));
      dispatch(setIsSigningIn(false));
    } catch (error) {
      dispatch(setError('SIGN_IN_ERROR', error.message));
      dispatch(setIsSigningIn(false));
    }
  }
};

export const logout = (auth) => {
  return (dispatch) => {
    try {
      dispatch(setLogout());
      removePersisted(auth);
    } catch (error) {
      dispatch(setError('LOGOUT_ERROR', error.message));
    }
  }
};

export const setAuth = (value) => {
  return {
    type: 'AUTH',
    payload: value
  };
};

export const signupState = (type, value) => {
  return {
    type,
    payload: value
  };
};

export const setLogout = () => {
  return {
    type: 'LOGOUT',
    payload: ''
  };
};

export const setIsSigningUp = (value) => {
  return {
    type: 'IS_SIGNING_UP',
    payload: value
  };
};

export const setIsSigningIn = (value) => {
  return {
    type: 'IS_SIGNING_IN',
    payload: value
  };
};