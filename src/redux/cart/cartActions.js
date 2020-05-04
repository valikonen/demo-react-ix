import axios from 'axios';
import { GET_CART_SUCCESS, GET_CART_ERROR } from './cartActionTypes';

export const getCartSuccess = (cartItems) => {
  return {
    type: GET_CART_SUCCESS,
    payload: cartItems
  }
};

export const getCartError = (error) => {
  return {
    type: GET_CART_ERROR,
    payload: error
  }
}

export const getCartItems = () => {
  return (dispatch) => {
    axios.get('http://localhost:3004/cart')
      .then(response => {
        dispatch(getCartSuccess(response.data))
      })
      .catch(error => {
        dispatch(getCartError(error.message))
      });
  }
}