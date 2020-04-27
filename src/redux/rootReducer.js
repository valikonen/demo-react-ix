import { combineReducers } from 'redux';

import productsReducer from './products/producsReducer';

export const rootReducer = combineReducers({
    products: productsReducer
})