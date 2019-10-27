import { GET_PASSENGERS } from "../ActionTypes/Index";

const initialState = [{
  id: 1,
  phone_number: "0902721254",
  Fullname: "nhat truong",
  email: "jack@gmail.com",
  image: "252525121351"
}];

const passengers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PASSENGERS:
      return action.payload;
    default:
      return state;
  }
};

export default passengers;
