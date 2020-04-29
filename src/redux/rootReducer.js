import { combineReducers } from 'redux';

import productsReducer from './products/productsReducer';
import userReducer from './user/userReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
})