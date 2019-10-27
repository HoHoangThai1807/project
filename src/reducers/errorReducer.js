const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_ERROR':
      state = action.payload;
      break;

    case 'SIGN_IN_ERROR':
      state = action.payload;
      break;

    case 'LOGOUT_ERROR':
      state = action.payload;
      break;

    case 'RESET_ERROR':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

export default errorReducer;