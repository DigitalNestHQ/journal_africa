import { GET_NEWS, GET_NEWS_ERROR, SET_LOADING } from '../types'

const newsReducer = (state, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      }

    case GET_NEWS_ERROR:
      return {
        ...state,
        error: action.payload,
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

export default newsReducer
