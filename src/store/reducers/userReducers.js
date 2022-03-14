import * as userTypes from "../constants/userTypes"

export const createUserReducer = (
  state = { loading: false, message: null, error: null, user: {} },
  { type, payload }
) => {
  switch (type) {
    case userTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case userTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    case userTypes.USER_REGISTER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
      }
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      }
    case userTypes.CLEAR_USER_MESSAGES:
      return {
        ...state,
        message: null,
      }
    default:
      return state
  }
}

export const loginUserReducer = (
  state = { loading: false, message: null, error: null, user: {}, token: null },
  { type, payload }
) => {
  switch (type) {
    case userTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case userTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        user: payload.data,
        token: payload.token,
      }
    case userTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
        user: null,
        token: null,
      }
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      }
    case userTypes.CLEAR_USER_MESSAGES:
      return {
        ...state,
        message: null,
      }
    default:
      return state
  }
}
