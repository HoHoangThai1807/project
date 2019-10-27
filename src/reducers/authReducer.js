const initialState = {
  isSigningUp: false,
  isSigningIn: false,
  signupState: null,
  isAuthenticated: false,
  userInfo: {},
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH':
      state = {...state, ...action.payload, isAuthenticated: true };
      break;

    case 'LOGOUT':
      state = {...state, isAuthenticated: false, userInfo: {}, token: '' };
      break;

    case 'IS_SIGNING_UP':
      state = {...state, isSigningUp: action.payload};
      break;

    case 'SIGNUP_STATE_SUCCESS':
      state = {...state, signupState: action.payload};
      break;
  
    case 'SIGNUP_STATE_RESET':
      state = {...state, signupState: action.payload};
      break;
  
    case 'SIGNUP_STATE_FAILED':
      state = {...state, signupState: action.payload};
      break;
  
    case 'IS_SIGN_IN':
      state = {...state, isSigningIn: action.payload};
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;