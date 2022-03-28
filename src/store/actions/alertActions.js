import * as alertTypes from "../constants/alertTypes"
import * as userTypes from "../constants/userTypes"
import { v4 as uuid } from "uuid"

export const showAlert = (message, type) => (dispatch) => {
  const id = uuid("v4")
  dispatch({
    type: alertTypes.SET_ALERT,
    payload: { message, type, id },
  })

  setTimeout(() => {
    dispatch({ type: alertTypes.REMOVE_ALERT, payload: id })
    dispatch({ type: userTypes.CLEAR_USER_MESSAGES })
    dispatch({ type: userTypes.CLEAR_USER_ERRORS })
  }, 10000)
}

export const removeAlert = (id) => (dispatch) => {
  dispatch({ type: alertTypes.REMOVE_ALERT, payload: id })
  dispatch({ type: userTypes.CLEAR_USER_MESSAGES })
  dispatch({ type: userTypes.CLEAR_USER_ERRORS })
}
