import React, { useEffect, Fragment, useContext } from 'react'
// import CommentForm from './CommentForm'
// import ShareNews from './ShareNews'
import bannerAds from './../../assets/images/bannerads.png'
import ReactHtmlParser from 'react-html-parser'
import Nav from '../reusables/navigation/Nav/nav'
import Footer from '../reusables/navigation/Footer/footer'
import { useParams, Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import './allNews.css'
import { NotLoggedIn, LoggedInNotSubscribed } from './FreeReaderPersuader'
// import { PopulateReadersList } from '../homepage/politics/ReaderList'
// import { ContactsAds1 } from '../ContactUs/mainSection/ContactsAds'
// import { formatDate } from '../../_helper/dateFormatter'
import authContext from '../../context/auth/authContext'
import newsContext from '../../context/news/NewsContext'
import commentsContext from '../../context/comments/commentsContext'
import { LargeSizeAds } from '../homepage/ads/Ads'
// import { addView } from './postView'
import { Row, Col, Card } from 'react-bootstrap'
import cybertruck from '../../assets/images/cybertruck1.jpg'
import Moment from 'react-moment'
import { HtmlParseOptions } from '../../_helper/parseNewsHtml'
import { useViewPort } from '../../components/hooks/Viewport'
import '../category/newscategory.css'
import NewsComments from './NewsComments'
import NewsForm from './NewsForm'
import RelatedNews from './RelatedNews'
import ShareNews from './ShareNews'

const GetNews = () => {
  const contextComment = useContext(commentsContext)
  const userContext = useContext(authContext)
  const { user, isAuthenticated } = userContext
  const newsFeedContext = useContext(newsContext)
  const { news, loading, singleNews, getNews, getSingleNews } = newsFeedContext
  const { comment_loading } = contextComment
  const { slug } = useParams()
  const { width } = useViewPort()
  const breakpoint = 1150

  const getAdjacentPosts = (slug) => {
    if (singleNews.length === 0) return ''
    const currentCategoryNews = news.filter(
      (news) => news.category_id === singleNews[0].category_id,
    )
    const postIndex = currentCategoryNews.findIndex(
      (postHeader) => postHeader?.slug === slug,
    )

    return {
      previous:
        postIndex <= 0
          ? ''
          : {
              slug: currentCategoryNews[postIndex - 1].slug,
            },
      next:
        postIndex >= currentCategoryNews.length - 1
          ? ''
          : {
              slug: currentCategoryNews[postIndex + 1].slug,
            },
    }
  }

  useEffect(() => {
    getSingleNews(slug)
    //eslint-disable-next-line
  }, [slug])

  useEffect(() => {
    getNews()
    //eslint-disable-next-line
  }, [])

  if (loading || singleNews === null || news === null || comment_loading) {
    return <Loader />
  }

  const currentCategoryNews = news.filter((news) => {
    if (singleNews.length === 0) return ''
    return news.category_id === singleNews[0].category_id
  })
  const currentCategoryNewsWithoutSingleNews = currentCategoryNews.filter(
    (news) => {
      if (singleNews.length === 0) return ''
      return news.id !== singleNews[0].id
    },
  )

  const { previous, next } = getAdjacentPosts(slug)

  return (
    <Fragment>
      <Nav />
      <div className="single-news-section">
        <div className="single-news-section-wrapper">
          <div className="s-n-ads-container">
            <LargeSizeAds img={bannerAds} />
          </div>
          <main className="single-news-main-section">
            <div className="s-n-content-grid">
              <div className="s-n-left-content">
                {!loading && singleNews.length === 0 ? (
                  <h5>Post Unavailable</h5>
                ) : (
                  <div className="available-content">
                    <h5 className="news-post-title">
                      {singleNews[0].post_title}
                    </h5>
                    <div className="news-img-container">
                      <img
                        src={`https://api.tv24africa.com/public/storage/post_image/${singleNews[0].featured_image}`}
                        alt="featuredImg"
                        className="news-img"
                      />
                    </div>

                    <div className="main-content">
                      {ReactHtmlParser(
                        `${
                          singleNews[0].post_type === 'premium' &&
                          isAuthenticated
                            ? user.subscription_status
                              ? singleNews[0].post_description
                              : singleNews[0].post_description.substring(
                                  0,
                                  1500,
                                )
                            : singleNews[0].post_type === 'free' &&
                              isAuthenticated
                            ? singleNews[0].post_description
                            : singleNews[0].post_description.substring(0, 1500)
                        }`,
                        HtmlParseOptions,
                      )}
                    </div>
                    {singleNews[0].post_type === 'premium' &&
                    isAuthenticated ? (
                      user.subscription_status ? (
                        <div></div>
                      ) : (
                        <div className="blur-content"></div>
                      )
                    ) : singleNews[0].post_type === 'free' &&
                      isAuthenticated ? (
                      <div></div>
                    ) : (
                      <div className="blur-content"></div>
                    )}
                    <div className="check-mate">
                      {!isAuthenticated ? (
                        <NotLoggedIn />
                      ) : isAuthenticated && !user.subscription_status ? (
                        <LoggedInNotSubscribed />
                      ) : (
                        ''
                      )}
                    </div>
                    <ShareNews next={next} previous={previous} />
                    <div className="related-articles-section">
                      <button className="related-articles-btn">
                        related articles
                      </button>
                      <div className="related-content">
                        <Row xs={1} md={4} className="g-4">
                          {currentCategoryNewsWithoutSingleNews
                            .slice(0, 4)
                            .map((categ, idx) => (
                              <RelatedNews
                                key={categ.id}
                                slug={categ.slug}
                                featured_image={categ.featured_image}
                                post_type={categ.post_type}
                              />
                            ))}
                        </Row>
                      </div>
                    </div>
                    <NewsComments slug={slug} />
                    <NewsForm singleNews={singleNews} />
                  </div>
                )}
              </div>
              {width > breakpoint ? (
                <div className="cat-left-content s-n-right-content">
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
          </main>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default GetNews
