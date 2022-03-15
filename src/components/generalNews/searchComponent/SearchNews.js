import React, { Fragment, useContext, useEffect } from "react"
import Navbar from "../../reusables/navigation/Nav/Nav"
import Footer from "../../reusables/navigation/Footer/Footer"
import SearchForm from "./SearchForm"
import newsContext from "../../../context/news/NewsContext"
import SearchComponent from "./SearchComponent"
import Loader from "../../loader/Loader"

const SearchNews = () => {
  const context = useContext(newsContext)
  const { news, filtered, getNews, loading } = context

  useEffect(() => {
    getNews()
    //eslint-disable-next-line
  }, [])

  if (news === null || loading) {
    ;<Loader />
  }

  return (
    <Fragment>
      <Navbar />
      <main className="cat-section section-content-default">
        <div className="section-wrapper-default">
          <SearchForm />
          <div className="categ-content py-3 px-3">
            <div className="search-news">
              <div className="main-search-content">
                <SearchComponent filtered={filtered} news={news} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}

export default SearchNews
