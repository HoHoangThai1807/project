import {GET_PASSENGERS} from '../ActionTypes/Index';
import axios from 'axios';

const instance = axios.create({baseURL:'http://localhost:5000'})

const setPassenger = (passengers) => {
    return {
      type: GET_PASSENGERS,
      payload: passengers,
    };
  };

 const fetchPassengers = () => {
    return async dispatch => {
        const response  = await instance.get('/api/passengers');
        console.log(response)
        const passengers = await response.json();
        dispatch(setPassenger(passengers));
    }
}

export default fetchPassengers;


