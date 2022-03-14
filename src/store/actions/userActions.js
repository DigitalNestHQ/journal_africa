import * as userTypes from "../constants/userTypes"
import { withoutAuthToken } from "../../utils/axios"

export const createUser = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.USER_REGISTER_REQUEST,
    })

    const { data } = await withoutAuthToken.post("/register", formData)

    dispatch({
      type: userTypes.USER_REGISTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: userTypes.USER_REGISTER_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.USER_LOGIN_REQUEST,
    })

    const { data } = await withoutAuthToken.post("/login", formData)

    dispatch({
      type: userTypes.USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem("user", JSON.stringify(data.data))
    localStorage.setItem("token", data.token)
  } catch (error) {
    dispatch({
      type: userTypes.USER_LOGIN_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const clearErrors = () => (dispatch) => {
  dispatch({ type: userTypes.CLEAR_USER_ERRORS })
}

export const clearUserMessages = () => (dispatch) => {
  dispatch({ type: userTypes.CLEAR_USER_MESSAGES })
}
