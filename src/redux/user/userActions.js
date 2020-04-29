import axios from 'axios';
import { GET_USER_SUCCESS, GET_USER_ERROR } from './userActionType';

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
}
export const getUserError = (err) => {
  return {
    type: GET_USER_ERROR,
    payload: err
  }
}

export const getUser = () => {
  return (dispatch) => {
    axios.get('http://localhost:3004/user')
      .then(response => {
        dispatch(getUserSuccess(response.data))
      })
      .catch(err => {
        dispatch(getUserError(err.message))
      })
  }
}