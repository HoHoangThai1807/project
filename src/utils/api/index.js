import axios from 'axios';
const apiDest = process.env.API_URL || 'http://localhost:5050';
axios.defaults.baseURL = apiDest;

export const signup = (payload) => axios({
  url: 'signup',
  method: 'POST',
  data: payload,
});

export const auth = (payload) => axios({
  url: 'auth',
  method: 'POST',
  data: payload,
});