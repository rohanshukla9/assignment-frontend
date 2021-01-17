import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_RESET,
  POST_CREATE_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_RESET,
  POST_DELETE_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from '../constants/postConstants';

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return {
        loading: true,
        success: false,
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
      return {
        success: false,
      };
    default:
      return state;
  }
};

export const postAuthUserReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        success: true,
      };
    case POST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const postAuthDelete = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case POST_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case POST_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case POST_DELETE_RESET:
      return {
        success: false,
      };
    default:
      return state;
  }
};
