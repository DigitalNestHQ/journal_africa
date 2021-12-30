import {
  GET_NEWS,
  GET_NEWS_ERROR,
  SET_LOADING,
  SET_LATEST_LOADING,
  GET_CATEG_NEWS,
  GET_SINGLE_NEWS,
  GET_LATEST,
  FILTER_NEWS,
  CLEAR_FILTER,
} from '../types'

const newsReducer = (state, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      }

    case FILTER_NEWS:
      return {
        ...state,
        filtered: state.news.filter((news) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return news.post_title.match(regex) || news.slug.match(regex)
        }),
      }

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }

    case GET_LATEST:
      return {
        ...state,
        latestNews: action.payload,
        latestLoading: false,
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
    case SET_LATEST_LOADING:
      return {
        ...state,
        latestLoading: true,
      }

    default:
      return state
  }
}

export default newsReducer
