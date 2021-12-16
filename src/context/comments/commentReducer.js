import {
  GET_COMMENTS,
  POST_COMMENTS,
  COMMENTS_ERROR,
  COMMENTS_LOADING,
} from '../types'
const commentReducer = (state, action) => {
  switch (action.type) {
    case POST_COMMENTS:
      return {
        ...state,
        ...action.payload,
        comment_message: action.payload,
        comments_loading: false,
      }

    case GET_COMMENTS:
      return {
        ...state,
        ...action.payload,
        newsComment: action.payload,
        comments_loading: false,
      }

    case COMMENTS_ERROR:
      return {
        ...state,
        ...action.payload,
        comments_loading: false,
        comment_error: action.payload,
      }
    case COMMENTS_LOADING:
      return {
        ...state,
        comments_loading: true,
      }
    default:
      return state
  }
}

export default commentReducer
