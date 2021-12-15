import React, { useState, useEffect, Fragment, useContext } from 'react'
import Footer from '../reusables/navigation/Footer/footer'
import CategoryCard from './CategoryCard'
import { useLocation, Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import './newscategory.css'
// import UnableToFetchNews from '../reusables/errorMessages/UnableToFetchNews'
// import { ContactsAds1 } from '../ContactUs/mainSection/ContactsAds'
// import { PopulateReadersList } from '../homepage/politics/ReaderList'
import newsContext from '../../context/news/NewsContext'
import Navbar from 'components/reusables/navigation/Nav/nav'
import LargeAds from '../../assets/images/bannerads.png'
import '../homepage/ads/ads.css'
import { LargeSizeAds } from '../homepage/ads/Ads'
import { HtmlParseOptions } from '../../_helper/parseNewsHtml'
import ReactHtmlParser from 'react-html-parser'
import cybertruck from '../../assets/images/cybertruck1.jpg'
import Moment from 'react-moment'
import { useViewPort } from '../../components/hooks/Viewport'

const SubcategoryNews = () => {
  const context = useContext(newsContext)
  const { news, loading, categoryNews, getNews, getCategory } = context
  const { search } = useLocation()
  const x = new URLSearchParams(search)
  const subcategory = x.get('subcategory')
  const [numberOfCategCard, setNumberOfCategCard] = useState(5)
  const { width } = useViewPort()
  const breakpoint = 991

  useEffect(() => {
    getNews()
    getCategory('Discover Africa')
    //eslint-disable-next-line
  }, [subcategory])

  if (loading || news === null || categoryNews === null) {
    return <Loader />
  }

  const getCategories = categoryNews?.filter(
    (c) => c.sub_category === subcategory,
  )
  const handleMore = () => {
    setNumberOfCategCard((prev) => prev + 2)
  }

  return (
    <Fragment>
      <Navbar />
      {!loading && getCategories.length === 0 ? (
        <div className="category-comp-heading">
          <h5 className="category-header">No news available</h5>
        </div>
      ) : (
        <div className="category-comp-heading">
          <h5 className="category-header">{getCategories[0].sub_category}</h5>
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
                {!loading && getCategories.length === 0 ? (
                  <h5 className="text-dark">No news available</h5>
                ) : (
                  getCategories.slice(0, numberOfCategCard).map((eachCard) => (
                    <Link
                      key={eachCard.id}
                      to={`/post/${eachCard.slug}`}
                      className="category-card-links"
                    >
                      <CategoryCard
                        featured_image={eachCard.featured_image}
                        post_type={eachCard.post_type}
                        slug={eachCard.slug}
                        post_description={eachCard.post_description}
                      />
                    </Link>
                  ))
                )}
                {getCategories.length > numberOfCategCard ? (
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
                      news.slice(0, 3).map((eachCard) => (
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

export default SubcategoryNews
