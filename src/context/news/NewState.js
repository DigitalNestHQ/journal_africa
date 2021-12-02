import React, { useReducer } from 'react'
import axios from 'axios'
import newsContext from './NewsContext'
import newsReducer from './NewsReducer'
import { GET_NEWS, GET_NEWS_ERROR, SET_LOADING } from '../types'

const NewState = ({ children }) => {
  const initialState = {
    news: null,
    loading: true,
    freeNews: null,
    error: null,
  }

  const [state, dispatch] = useReducer(newsReducer, initialState)

  // Get news
  const getNews = async () => {
    try {
      const res = await axios.get('https://api.tv24africa.com/api/v1/posts')
      dispatch({
        type: GET_NEWS,
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: GET_NEWS_ERROR,
        payload: error,
      })
    }
  }

  //set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  return (
    <newsContext.Provider
      value={{
        news: state.news,
        loading: state.loading,
        freeNews: state.freeNews,
        error: state.error,
        setLoading,
        getNews,
      }}
    >
      {children}
    </newsContext.Provider>
  )
}

export default NewState
