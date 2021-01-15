import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from '../constants/postConstants';
import axios from 'axios';

export const createPost = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.meta.token}`,
      },
    };

    const { data } = await axios.post('api/v1/posts', { body }, config);

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const authUserPosts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.meta.token}`,
      },
    };

    const { data } = await axios.get('api/v1/posts', config);

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
