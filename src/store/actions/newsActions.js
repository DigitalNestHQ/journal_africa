import * as newsTypes from "../constants/newsTypes"
import { withoutAuthToken } from "../../utils/axios"
import axios from "axios"

export const getNews = () => async (dispatch) => {
  try {
    dispatch({
      type: newsTypes.GET_NEWS_REQUEST,
    })

    const {
      data: { data },
    } = await withoutAuthToken.get("/posts")

    dispatch({
      type: newsTypes.GET_NEWS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: newsTypes.GET_NEWS_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getWordpressNews = () => async (dispatch) => {
  try {
    dispatch({
      type: newsTypes.GET_WORDPRESS_NEWS_REQUEST,
    })

    const {
      data: { data },
    } = await await axios.get(
      "https://api.tv24africa.com/api/v1/wordpress/posts"
    )

    dispatch({
      type: newsTypes.GET_WORDPRESS_NEWS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: newsTypes.GET_WORDPRESS_NEWS_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getCategoryNews = (category) => async (dispatch) => {
  try {
    dispatch({
      type: newsTypes.GET_CATEGORY_REQUEST,
    })

    const {
      data: { data },
    } = await withoutAuthToken.get(`/categories?category=${category}`)

    dispatch({
      type: newsTypes.GET_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: newsTypes.GET_CATEGORY_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
