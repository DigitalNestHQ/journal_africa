import React, { useReducer } from 'react'
import axios from 'axios'
import newsContext from './NewsContext'
import newsReducer from './NewsReducer'
import {
  GET_NEWS,
  GET_NEWS_ERROR,
  SET_LOADING,
  GET_CATEG_NEWS,
  GET_SINGLE_NEWS,
  // GET_LATEST,
} from '../types'

const NewState = ({ children }) => {
  const initialState = {
    news: null,
    loading: true,
    // latestLoading: true,
    singleNews: null,
    categoryNews: null,
    // latestNews: null,
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

  //Get Category news
  const getCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://api.tv24africa.com/api/v1/categories?category=${category}`,
      )

      dispatch({
        type: GET_CATEG_NEWS,
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: GET_NEWS_ERROR,
        payload: error,
      })
    }
  }

  const getSingleNews = async (slug) => {
    try {
      const res = await axios.get(
        `https://api.tv24africa.com/api/v1/getpost/${slug}`,
      )

      dispatch({
        type: GET_SINGLE_NEWS,
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: GET_NEWS_ERROR,
        payload: error,
      })
    }
  }

  // const getLatestNews = async () => {
  //   try {
  //     const res = await axios.get(
  //       'https://api.tv24africa.com/api/v1/wordpress/posts',
  //     )

  //     dispatch({
  //       type: GET_LATEST,
  //       payload: res.data.data,
  //     })
  //   } catch (error) {
  //     dispatch({
  //       type: GET_NEWS_ERROR,
  //       payload: error,
  //     })
  //   }
  // }

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
        // latestLoading: state.latestLoading,
        singleNews: state.singleNews,
        error: state.error,
        categoryNews: state.categoryNews,
        // latestNews: state.latestNews,
        setLoading,
        getNews,
        getCategory,
        getSingleNews,
        // getLatestNews
      }}
    >
      {children}
    </newsContext.Provider>
  )
}

export default NewState
