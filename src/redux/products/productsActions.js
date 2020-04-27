
import axios from 'axios';
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from './productsType';

export const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const getProductsError = (err) => {
    return {
        type: GET_PRODUCTS_ERROR,
        payload: err
    }
}

export const getProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:3004/products')
             .then(response => {
                 console.log('response: ', response.data);
                 dispatch(getProductsSuccess(response.data))
             })
             .catch(err => {
                 dispatch(getProductsError(err.message))
             });
    }
}