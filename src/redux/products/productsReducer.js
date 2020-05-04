import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, CREATE_PRODUCT_SUCCESS } from './productsType';

const initialState = []

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        price: action.payload.price,
        imgUrl: action.payload.imgUrl,
        category: action.payload.category,
        items_in_stock: action.payload.items_in_stock
      }
    default: return state
  }
}

export default productsReducer;