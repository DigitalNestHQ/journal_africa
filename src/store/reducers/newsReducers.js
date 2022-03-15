import * as newsTypes from "../constants/newsTypes"

export const getNewsReducer = (
  state = { loading: true, error: null, news: [] },
  { type, payload }
) => {
  switch (type) {
    case newsTypes.GET_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case newsTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: payload,
      }
    case newsTypes.GET_NEWS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        news: [],
      }
    case newsTypes.CLEAR_NEWS_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const getWordpressReducer = (
  state = { loading: true, error: null, wordpressNews: [] },
  { type, payload }
) => {
  switch (type) {
    case newsTypes.GET_WORDPRESS_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case newsTypes.GET_WORDPRESS_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        wordpressNews: payload,
      }
    case newsTypes.GET_WORDPRESS_NEWS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        wordpressNews: [],
      }
    case newsTypes.CLEAR_NEWS_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const getCategoryReducer = (
  state = { loading: true, error: null, categoryNews: [] },
  { type, payload }
) => {
  switch (type) {
    case newsTypes.GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case newsTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryNews: payload,
      }
    case newsTypes.GET_CATEGORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        categoryNews: [],
      }
    case newsTypes.CLEAR_NEWS_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
