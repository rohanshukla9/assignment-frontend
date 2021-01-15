import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_RESET,
  POST_CREATE_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from '../constants/postConstants';

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return {
        loading: true,
      };
    case POST_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        post: action.payload,
      };
    case POST_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const postAuthUserReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return {
        loading: true,
      };
    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case POST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    // case ORDER_AUTH_USER_RESET:
    //   return {
    //     orders: [],
    //   };
    default:
      return state;
  }
};
