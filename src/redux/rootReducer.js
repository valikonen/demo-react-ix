import { combineReducers } from 'redux';

import productsReducer from './products/productsReducer';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer
})