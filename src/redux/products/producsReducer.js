import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from './productsType';

const initialState = [{
    title: '',
    price: '',
    imgUrl: ''
}]

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default: return state
    }
}

export default productsReducer;