import {
  GET_NEWS,
  GET_NEWS_ERROR,
  SET_LOADING,
  GET_CATEG_NEWS,
  GET_SINGLE_NEWS,
  GET_SUB_CATEG_NEWS,
} from '../types'

const newsReducer = (state, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      }

    case GET_SUB_CATEG_NEWS:
      return {
        ...state,
        subCategoryNews: action.payload,
        loading: false,
      }

    case GET_CATEG_NEWS:
      return {
        ...state,
        categoryNews: action.payload,
        loading: false,
      }
    case GET_SINGLE_NEWS:
      return {
        ...state,
        singleNews: action.payload,
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
