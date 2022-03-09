import React, { useReducer } from "react"
import axios from "axios"
import newsContext from "./NewsContext"
import newsReducer from "./NewsReducer"
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
} from "../types"

const NewState = ({ children }) => {
  const initialState = {
    news: null,
    filtered: null,
    loading: true,
    latestLoading: true,
    singleNews: null,
    categoryNews: null,
    latestNews: null,
    error: null,
  }

  const [state, dispatch] = useReducer(newsReducer, initialState)

  //set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  //set loading
  const setLatestLoading = () => {
    dispatch({
      type: SET_LATEST_LOADING,
    })
  }

  // Get news
  const getNews = async () => {
    setLoading()
    try {
      const res = await axios.get("https://api.journal.africa/api/v1/posts")
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
    setLoading()
    try {
      const res = await axios.get(
        `https://api.journal.africa/api/v1/categories?category=${category}`
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
    setLoading()
    try {
      const res = await axios.get(
        `https://api.journal.africa/api/v1/getpost/${slug}`
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

  const getLatestNews = async () => {
    setLatestLoading()
    try {
      const res = await axios.get(
        "https://api.tv24africa.com/api/v1/wordpress/posts"
      )

      dispatch({
        type: GET_LATEST,
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: GET_NEWS_ERROR,
        payload: error,
      })
    }
  }

  const filterNews = (text) => {
    dispatch({ type: FILTER_NEWS, payload: text })
  }

  const clearFilterNews = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <newsContext.Provider
      value={{
        news: state.news,
        filtered: state.filtered,
        loading: state.loading,
        latestLoading: state.latestLoading,
        singleNews: state.singleNews,
        error: state.error,
        categoryNews: state.categoryNews,
        latestNews: state.latestNews,
        setLoading,
        getNews,
        getCategory,
        getSingleNews,
        getLatestNews,
        filterNews,
        clearFilterNews,
      }}
    >
      {children}
    </newsContext.Provider>
  )
}

export default NewState
