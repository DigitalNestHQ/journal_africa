import * as alertTypes from "../constants/alertTypes"
import { v4 as uuid } from "uuid"

export const showAlert =
  (message, type, timeout = 10000) =>
  (dispatch) => {
    const id = uuid("v4")
    dispatch({
      type: alertTypes.SET_ALERT,
      payload: { message, type, id },
    })

    setTimeout(() => {
      dispatch({ type: alertTypes.REMOVE_ALERT, payload: id })
    }, timeout)
  }

export const removeAlert = (id) => (dispatch) => {
  dispatch({ type: alertTypes.REMOVE_ALERT, payload: id })
}
