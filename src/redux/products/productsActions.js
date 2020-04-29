import axios from 'axios';
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, CREATE_PRODUCT_SUCCESS } from './productsType';

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

export const createProductsSuccess = (product) => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: product
  }
}

export const getProducts = () => {
  return (dispatch) => {
    axios.get('http://localhost:3004/products')
      .then(response => {
        dispatch(getProductsSuccess(response.data))
      })
      .catch(err => {
        dispatch(getProductsError(err.message))
      });
  }
}

export const createProduct = (product) => {
  return () => {
    axios.post('http://localhost:3004/products', {
      title: product.title,
      price: product.price,
      imgUrl: product.imgUrl,
      category: product.category,
      items_in_stock: product.items_in_stock
    });
  }
}