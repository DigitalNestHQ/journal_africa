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
  GET_SUB_CATEG_NEWS,
} from '../types'

const NewState = ({ children }) => {
  const initialState = {
    news: null,
    loading: true,
    singleNews: null,
    categoryNews: null,
    subCategoryNews: null,
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

  //Get Category news
  const getSubCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://api.tv24africa.com/api/v1/sub-categories?subcategory=${category}`,
      )

      dispatch({
        type: GET_SUB_CATEG_NEWS,
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
        singleNews: state.singleNews,
        error: state.error,
        categoryNews: state.categoryNews,
        subCategoryNews: state.subCategoryNews,
        setLoading,
        getNews,
        getCategory,
        getSingleNews,
        getSubCategory,
      }}
    >
      {children}
    </newsContext.Provider>
  )
}

export default NewState
