import * as alertTypes from "../constants/alertTypes"

export const alertReducer = (state = [], { type, payload }) => {
  switch (type) {
    case alertTypes.SET_ALERT:
      return [...state, payload]

    case alertTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)

    default:
      return state
  }
}
