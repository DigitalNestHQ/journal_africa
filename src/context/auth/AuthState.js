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

      console.log(res.data)

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

      const userProfile = {
        ...res.data.data,
        hasSubscribed: res.data.subscription_status,
      }

      console.log(res.data)
      console.log(userProfile)

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

  // logout user
  const logOut = () => dispatch({ type: LOGOUT })

  //setLoading
  const setLoading = () => dispatch({ type: SET_LOADING })

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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthState
