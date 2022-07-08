import * as userTypes from '../constants/userTypes';
import { withoutAuthToken } from '../../utils/axios';
import axios from 'axios';

export const createUser = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.USER_REGISTER_REQUEST,
    });

    const { data } = await withoutAuthToken.post('/register', formData);

    dispatch({
      type: userTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userTypes.USER_REGISTER_ERROR,
      payload: error.response ? error.response?.data?.message : error.message,
    });
  }
};

export const getUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: userTypes.GET_USER_REQUEST,
    });

    const {
      loginUser: { token },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}user`,
      config
    );

    dispatch({
      type: userTypes.GET_USER_SUCCESS,
      payload: data,
    });

    localStorage.setItem('authuser', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userTypes.GET_USER_ERROR,
      payload: error && error.message,
    });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.USER_LOGIN_REQUEST,
    });

    const { data } = await withoutAuthToken.post('/login', formData);

    dispatch({
      type: userTypes.USER_LOGIN_SUCCESS,
      payload: data.data,
    });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data?.data));
    // window.location.replace('/');
    window.history.back();
    window.location.reload();
    getUser();
  } catch (error) {
    dispatch({
      type: userTypes.USER_LOGIN_ERROR,
      payload: error.response ? error.response?.data?.message : error.message,
    });
  }
};

export const getPlans = () => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.GET_PLANS_REQUEST,
    });

    const { data } = await withoutAuthToken.get('/plans');

    dispatch({
      type: userTypes.GET_PLANS_SUCCESS,
      payload: data.plans,
    });

    localStorage.setItem('plans', JSON.stringify(data.plans));
  } catch (error) {
    dispatch({
      type: userTypes.GET_PLANS_ERROR,
      payload: error && error.message,
    });
  }
};

export const userPay = (paymentData) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.USER_PAY_REQUEST,
    });

    const { data } = await withoutAuthToken.post('/pay', paymentData);

    dispatch({
      type: userTypes.USER_PAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userTypes.USER_PAY_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userEmailSub = (email) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.USER_SUB_REQUEST,
    });

    const { data } = await withoutAuthToken.post(`/newsletter?email=${email}`);

    dispatch({
      type: userTypes.USER_SUB_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userTypes.USER_SUB_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: userTypes.USER_LOGOUT });
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  window.location.replace('/');
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: userTypes.CLEAR_USER_ERRORS });
};

export const clearUserMessages = () => (dispatch) => {
  dispatch({ type: userTypes.CLEAR_USER_MESSAGES });
};
