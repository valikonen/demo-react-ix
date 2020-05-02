import { GET_CART_SUCCESS, GET_CART_ERROR } from './cartActionTypes';

const initialState = []

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload
      }
    case GET_CART_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default: return state
  }
}

export default CartReducer;