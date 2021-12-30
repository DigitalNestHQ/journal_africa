import React, { Fragment } from 'react'
import Navbar from '../../reusables/navigation/Nav/nav'
import Footer from '../../reusables/navigation/Footer/footer'
import SearchForm from './SearchForm'

const SearchNews = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="cat-section section-content-default">
        <div className="section-wrapper-default">
          <SearchForm />
          <div className="categ-content">
            <div className="search-news">
              <div className="main-search-content">
                <p>All news here</p>
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
