import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
  EMAIL_SUBSCRIPTION,
  EMAIL_SUBSCRIPTION_FAIL,
} from '../types'

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        message: action.payload.status,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        message: action.payload.message,
      }

    case EMAIL_SUBSCRIPTION:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      }
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      }
    case EMAIL_SUBSCRIPTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default authReducer
