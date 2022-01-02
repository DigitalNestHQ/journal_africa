import React, { useReducer } from 'react'
import axios from 'axios'
import commentsContext from './commentsContext'
import commentReducer from './commentReducer'
import {
  GET_COMMENTS,
  POST_COMMENTS,
  COMMENTS_ERROR,
  COMMENTS_LOADING,
} from '../types'

const CommentState = ({ children }) => {
  const initialState = {
    newsComment: null,
    comment_message: null,
    comment_error: null,
    comments_loading: false,
  }

  const [state, dispatch] = useReducer(commentReducer, initialState)

  const setCommentLoading = () => {
    dispatch({
      type: COMMENTS_LOADING,
    })
  }

  const postComments = async (name, comment, post_id, post_title) => {
    setCommentLoading()
    try {
      const res = await axios.post(
        `https://api.tv24africa.com/api/v1/comment?name=${name}&comment=${comment}&post_id=${post_id}&post_title=${post_title}`,
      )

      dispatch({
        type: POST_COMMENTS,
        payload: res,
      })
    } catch (error) {
      dispatch({
        type: COMMENTS_ERROR,
        payload: error,
      })
    }
  }

  const getComments = async (slug) => {
    setCommentLoading()
    try {
      const res = await axios.get(
        `https://api.tv24africa.com/api/v1/getcomment/${slug}`,
      )
      dispatch({
        type: GET_COMMENTS,
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: COMMENTS_ERROR,
        payload: error,
      })
    }
  }

  return (
    <commentsContext.Provider
      value={{
        newsComment: state.newsComment,
        comment_message: state.comment_message,
        comment_error: state.comment_error,
        comments_loading: state.comments_loading,
        postComments,
        setCommentLoading,
        getComments,
      }}
    >
      {children}
    </commentsContext.Provider>
  )
}

export default CommentState
