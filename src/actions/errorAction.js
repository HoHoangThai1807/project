export const setError = (type, error) => {
  return {
    type,
    payload: error,
  };
};

export const resetError = () => {
  return {
    type: 'RESET_ERROR',
    payload: {},
  };
};


export const getError = (error) => {
  return dispatch => {
    dispatch(setError(error)); 
  }
};