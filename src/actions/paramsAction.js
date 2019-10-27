const setParam = (param) => {
  return {
    type: 'ADD_PARAM',
    payload: param,
  };
};

export const addParam = (param) => {
  return dispatch => {
    dispatch(setParam(param)); 
  }
}