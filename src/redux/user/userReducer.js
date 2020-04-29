import { GET_USER_SUCCESS, GET_USER_ERROR } from './userActionType';

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case GET_USER_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }

    default: return state
  }
}

export default userReducer;
