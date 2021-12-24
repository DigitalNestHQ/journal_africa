import React, { useState, useEffect, Fragment, useContext } from 'react'
// import Header from './Header/index'
import Footer from '../reusables/navigation/Footer/footer'
import CategoryCard from './CategoryCard'
import { useLocation, Link } from 'react-router-dom'
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
import TeaserCard from '../homepage/homepageTeaser/TeaserCard'
import cybertruck from '../../assets/images/cybertruck1.jpg'
import { useViewPort } from '../../components/hooks/Viewport'

const CategoryNews = () => {
  const context = useContext(newsContext)
  const { news, loading, categoryNews, getNews, getCategory } = context
  const [numberOfCategCard, setNumberOfCategCard] = useState(5)
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

  if (loading || categoryNews === null || news === null) {
    return <Loader />
  }

  return (
    <Fragment>
      <Nav />
      {!loading && categoryNews.length === 0 ? (
        <div className="category-comp-heading">
          <h5 className="category-header section-heading-default">
            No news available
          </h5>
        </div>
      ) : (
        <div className="category-comp-heading">
          <h5 className="category-header section-heading-default">
            {categoryNews[0].category_id}
          </h5>
        </div>
      )}
      <main className="cat-section section-content-default">
        <div className="section-wrapper-default">
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
                      className="category-card-links"
                      key={eachCard.id}
                      to={`/post/${eachCard.slug}`}
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
                  <h5 className="cat-left-heading section-heading-default">
                    Trending Posts
                  </h5>
                  <div className="trend-img-container">
                    <img src={cybertruck} alt="tesla" className="trend-img" />
                  </div>
                  <div className="trending-posts">
                    {!loading && news.length === 0 ? (
                      <h5 className="text-dark">No trending news available</h5>
                    ) : (
                      news
                        .sort((a, b) =>
                          parseInt(a.views) > parseInt(b.views) ? -1 : 1,
                        )
                        .slice(0, 3)
                        .map((eachCard) => (
                          <Link
                            to={`/post/${eachCard.slug}`}
                            className="trending-card lastest-card-link"
                            key={eachCard.id}
                          >
                            <TeaserCard eachCard={eachCard} />
                          </Link>
                        ))
                    )}
                  </div>
                  <div className="trend-img-container">
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
