import React, { useState, useEffect, Fragment, useContext } from 'react'
// import Header from './Header/index'
import Footer from '../reusables/navigation/Footer/footer'
// import CategoryCard from './CategoryCard'
import { useHistory, useLocation, Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import './newscategory.css'
// import UnableToFetchNews from '../reusables/errorMessages/UnableToFetchNews'
// import { ContactsAds1 } from '../ContactUs/mainSection/ContactsAds'
import Nav from '../reusables/navigation/Nav/nav'
// import { PopulateReadersList } from '../homepage/politics/ReaderList'
import newsContext from '../../context/news/NewsContext'
import LargeAds from '../../assets/images/bannerads.png'
import '../homepage/ads/ads.css'
import { LargeSizeAds } from '../homepage/ads/Ads'
import { HtmlParseOptions } from '../../_helper/parseNewsHtml'
import ReactHtmlParser from 'react-html-parser'
import cybertruck from '../../assets/images/cybertruck1.jpg'
import Moment from 'react-moment'
import { useViewPort } from '../../components/hooks/Viewport'

const CategoryNews = () => {
  const context = useContext(newsContext)
  const { news, loading, error, categoryNews, getNews, getCategory } = context
  const [numberOfCategCard, setNumberOfCategCard] = useState(5)
  const history = useHistory()
  const { search } = useLocation()
  const x = new URLSearchParams(search)
  const category = x.get('category')
  const { width } = useViewPort()
  const breakpoint = 991

  const handleMore = () => {
    setNumberOfCategCard((prev) => prev + 2)
  }

  useEffect(() => {
    getNews()
    getCategory(`${category}`)
    //eslint-disable-next-line
  }, [category])

  if (error) {
    return history.push('/error404')
  }

  if (loading || categoryNews === null || news === null) {
    return <Loader />
  }

  const free = categoryNews.filter((post) => post.post_type === 'premium')

  console.log(categoryNews)
  console.log(typeof category)

  return (
    <Fragment>
      <Nav />
      {!loading && categoryNews.length === 0 ? (
        <div className="category-comp-heading">
          <h5 className="category-header">No news available</h5>
        </div>
      ) : (
        <div className="category-comp-heading">
          <h5 className="category-header">{categoryNews[0].category_id}</h5>
        </div>
      )}
      <main className="cat-section">
        <div className="category-wrapper">
          <div className="cat-img-container">
            <LargeSizeAds img={LargeAds} />
          </div>
          <div className="categ-content">
            <div className="categ-content-grid">
              <div className="cat-right-content">
                {!loading && categoryNews.length === 0 ? (
                  <h5 className="text-dark">No news available</h5>
                ) : (
                  categoryNews.slice(0, numberOfCategCard).map((eachCard) => (
                    <Link
                      className="cate-content-list"
                      key={eachCard.id}
                      to={`/post/${eachCard.slug}`}
                    >
                      <div className="cat-content-list-item-img-cont">
                        <p className="premium-badge">
                          {eachCard.post_type === 'premium'
                            ? `${eachCard.post_type}`
                            : ''}
                        </p>
                        <img
                          src={`https://api.tv24africa.com/public/storage/post_image/${eachCard.featured_image}`}
                          alt="img"
                          className="cat-content-list-item-img"
                        />
                      </div>
                      <div className="cat-content-list-item-detail">
                        <h6 className="cat-content-list-item-detail-heading">
                          {eachCard.slug}
                        </h6>
                        <div className="cat-content-list-item-detail-text">
                          {ReactHtmlParser(
                            `${eachCard.post_description.substring(0, 135)}...`,
                            HtmlParseOptions,
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                )}
                {categoryNews.length > numberOfCategCard ? (
                  <button className="load-more" onClick={handleMore}>
                    Load More...
                  </button>
                ) : (
                  ''
                )}
              </div>
              {width > breakpoint ? (
                <div className="cat-left-content">
                  <h5 className="cat-left-heading">Trending Posts</h5>
                  <div className="trend-img-container">
                    <img src={cybertruck} alt="tesla" className="trend-img" />
                  </div>
                  <div className="trending-posts">
                    {!loading && news.length === 0 ? (
                      <h5 className="text-dark">No trending news available</h5>
                    ) : (
                      news.slice(14, 17).map((eachCard) => (
                        <Link
                          to={`/post/${eachCard.slug}`}
                          className="trending-card"
                          key={eachCard.id}
                        >
                          <p className="premium-badge-left">
                            {eachCard.post_type === 'premium'
                              ? `${eachCard.post_type}`
                              : ''}
                          </p>
                          <p className="trend-date">
                            <Moment format="MMMM Do YYYY">
                              {eachCard.updated_at}
                            </Moment>
                          </p>
                          <h6 className="trend-title">{eachCard.slug}</h6>
                          <p className="trend-text">
                            {ReactHtmlParser(
                              `${eachCard.post_description.substring(
                                0,
                                120,
                              )}...`,
                              HtmlParseOptions,
                            )}
                          </p>
                        </Link>
                      ))
                    )}
                  </div>
                  <div className="trend--img-container">
                    <img src={cybertruck} alt="tesla" className="trend-img" />
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="cat-img-container">
            <LargeSizeAds img={LargeAds} />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}

export default CategoryNews
