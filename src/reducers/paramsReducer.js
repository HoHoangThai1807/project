
const initialState = [{
  name: 'tuoi toi thieu',
  type: 'integer',
  description: 'tuoi toi thieu cua tai xe',
}];

const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PARAM':
      const newState = state.map(p => ({...p}));
      state = [...newState, action.payload];
      break;
  
    default:
      break;
  }
  return state;
};

export default paramsReducer;

