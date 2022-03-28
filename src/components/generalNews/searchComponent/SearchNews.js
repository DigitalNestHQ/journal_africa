import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as newsActions from "../../../store/actions/newsActions"
import Layout from "../../../components/layout/mainlayout/Layout"
import SearchForm from "./SearchForm"
import SearchComponent from "./SearchComponent"
import Loader from "../../loader/Loader"

const SearchNews = () => {
  const dispatch = useDispatch()
  const getAllNews = useSelector((state) => state.getNews)
  const { loading, news, filtered, error } = getAllNews

  useEffect(() => {
    dispatch(newsActions.getNews())
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  return (
    <Layout category={true}>
      <SearchForm />
      <div className="categ-content py-3 px-3">
        <div className="search-news">
          <div className="main-search-content">
            {!loading && news.length === 0 ? (
              <h4>No news available</h4>
            ) : (
              <SearchComponent filtered={filtered} news={news} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchNews
