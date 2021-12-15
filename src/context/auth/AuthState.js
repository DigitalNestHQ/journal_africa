import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setHeaderToken from '../../utils/setHeaderToken'

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGOUT,
  SET_LOADING,
  EMAIL_SUBSCRIPTION,
  EMAIL_SUBSCRIPTION_FAIL,
} from '../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    error: null,
    user: null,
    message: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  //setLoading
  const setLoading = () => dispatch({ type: SET_LOADING })

  // load user
  const loadUser = async () => {
    // get user details from the database
    if (localStorage.token) {
      setHeaderToken(localStorage.token)
    }
    try {
      const res = await axios.get('https://api.tv24africa.com/api/v1/user')
      // const userProfile = {
      //   ...res.data.data,
      //   hasSubscribed: res.data.subscription_status,
      // }
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      })
    }
  }
  // Register User
  const register = async (formData) => {
    setLoading()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post(
        'https://api.tv24africa.com/api/v1/register',
        formData,
        config,
      )
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.message,
      })
    }
  }
  // Login User
  const login = async (formData) => {
    setLoading()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post(
        'https://api.tv24africa.com/api/v1/login',
        formData,
        config,
      )
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      loadUser()
      return res
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message,
      })
    }
  }

  //email subscription
  const emailSub = async (formData) => {
    setLoading()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post(
        'https://api.tv24africa.com/api/v1/newsletter',
        formData,
        config,
      )
      dispatch({ type: EMAIL_SUBSCRIPTION, payload: res.data })
    } catch (error) {
      dispatch({ type: EMAIL_SUBSCRIPTION_FAIL, payload: error })
    }
  }

  // logout user
  const logOut = () => dispatch({ type: LOGOUT })

  // clear errors
  const clearErrors = () =>
    dispatch({
      type: CLEAR_ERRORS,
    })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        message: state.message,
        loadUser,
        register,
        login,
        clearErrors,
        logOut,
        emailSub,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthState
