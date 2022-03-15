import React, { useEffect, Fragment, useContext, useState } from "react"
import bannerAds from "./../../assets/images/bannerads.png"
import ReactHtmlParser from "react-html-parser"
import Nav from "../reusables/navigation/Nav/Nav"
import Footer from "../reusables/navigation/Footer/Footer"
import { useParams, Link } from "react-router-dom"
import Loader from "../loader/Loader"
import "./allNews.css"
import { NotLoggedIn, LoggedInNotSubscribed } from "./FreeReaderPersuader"
import authContext from "../../context/auth/authContext"
import newsContext from "../../context/news/NewsContext"
import { LargeSizeAds } from "../homepage/ads/Ads"
import TeaserCard from "../homepage/homepageTeaser/TeaserCard"
import { Row } from "react-bootstrap"
import cybertruck from "../../assets/images/cybertruck1.jpg"
import { HtmlParseOptions } from "../../_helper/parseNewsHtml"
import { useViewPort } from "../../components/hooks/Viewport"
import "../category/newscategory.css"
import RelatedNews from "./RelatedNews"
import ShareNews from "./ShareNews"
import Paging from "../reusables/Paging"
import axios from "axios"
import Moment from "react-moment"

const GetNews = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loggedIn, setLoggedIn] = useState({})
  const userContext = useContext(authContext)
  const { user, isAuthenticated } = userContext
  const newsFeedContext = useContext(newsContext)
  const { news, loading, singleNews, getNews, getSingleNews } = newsFeedContext
  const { slug } = useParams()
  const { width } = useViewPort()
  const breakpoint2 = 994

  const getAdjacentPosts = React.useCallback(
    (slug) => {
      if (singleNews.length === 0) return ""
      const currentCategoryNews = news.filter(
        (news) => news.category_id === singleNews[0].category_id
      )
      const postIndex = currentCategoryNews.findIndex(
        (postHeader) => postHeader?.slug === slug
      )

      return {
        previous:
          postIndex <= 0
            ? ""
            : {
                slug: currentCategoryNews[postIndex - 1].slug,
              },
        next:
          postIndex >= currentCategoryNews.length - 1
            ? ""
            : {
                slug: currentCategoryNews[postIndex + 1].slug,
              },
      }
    },
    [news, singleNews]
  )

  useEffect(() => {
    getSingleNews(slug)
    const addView = async () => {
      const id = {
        id: `${singleNews[0].id}`,
      }
      try {
        const res = await axios.post(
          "https://api.tv24africa.com/api/v1/add/view",
          id
        )
      } catch (error) {
        console.log(error)
      }
    }

    if (singleNews === null || singleNews.length === 0) {
      return
    }
    addView()

    //eslint-disable-next-line
  }, [slug])

  useEffect(() => {
    getNews()
    if (isAuthenticated) {
      if (user !== null) {
        setLoggedIn(user)
      }
    } else {
      setLoggedIn({})
    }
    //eslint-disable-next-line
  }, [isAuthenticated])

  if (loading || singleNews === null || news === null) {
    return <Loader />
  }

  const currentCategoryNews = news.filter((news) => {
    if (singleNews.length === 0) return ""
    return news.category_id === singleNews[0].category_id
  })

  const currentCategoryNewsWithoutSingleNews = currentCategoryNews.filter(
    (news) => {
      if (singleNews.length === 0) return ""
      return news.id !== singleNews[0].id
    }
  )

  const { previous, next } = getAdjacentPosts(slug)

  const firstPageIndex = (currentPage - 1) * 4
  const lastPageIndex = firstPageIndex + 4

  return (
    <Fragment>
      <Nav />
      <div className="showcase section-content-default">
        <div className="section-wrapper-default">
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
                    <h5 className="news-post-title section-heading-default">
                      {singleNews[0].post_title}
                    </h5>
                    <div className="news-author-details">
                      <p className="author-name-comp">
                        By <strong>{singleNews[0].author_name}</strong>
                      </p>
                      <p className="post-comp">
                        Posted on{" "}
                        <Moment format="MMMM Do YYYY">
                          {singleNews[0].updated_at}
                        </Moment>
                      </p>
                    </div>
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
                          singleNews[0].post_type === "premium" &&
                          isAuthenticated
                            ? loggedIn.subscription_status
                              ? singleNews[0].post_description
                              : singleNews[0].post_description.substring(
                                  0,
                                  1500
                                )
                            : singleNews[0].post_type === "premium" &&
                              !isAuthenticated
                            ? singleNews[0].post_description.substring(0, 1500)
                            : singleNews[0].post_description
                        }`,
                        HtmlParseOptions
                      )}
                    </div>
                    {singleNews[0].post_type === "premium" &&
                    isAuthenticated ? (
                      loggedIn.subscription_status ? (
                        <div></div>
                      ) : (
                        <div className="blur-content"></div>
                      )
                    ) : singleNews[0].post_type === "premium" &&
                      !isAuthenticated ? (
                      <div className="blur-content"></div>
                    ) : (
                      <div className=""></div>
                    )}
                    <div className="check-mate">
                      {singleNews[0].post_type === "premium" &&
                      isAuthenticated ? (
                        loggedIn.subscription_status ? (
                          ""
                        ) : (
                          <LoggedInNotSubscribed />
                        )
                      ) : singleNews[0].post_type === "free" ? (
                        <LoggedInNotSubscribed />
                      ) : (
                        <NotLoggedIn />
                      )}
                    </div>
                    <ShareNews next={next} previous={previous} />
                    {currentCategoryNewsWithoutSingleNews.length !== 0 ? (
                      <div className="related-articles-section">
                        <button className="related-articles-btn">
                          related articles
                        </button>
                        <div className="related-content">
                          <Row xs={1} md={4} className="related-row">
                            {currentCategoryNewsWithoutSingleNews
                              .slice(firstPageIndex, lastPageIndex)
                              .map((categ) => (
                                <RelatedNews
                                  key={categ.id}
                                  slug={categ.slug}
                                  featured_image={categ.featured_image}
                                  post_type={categ.post_type}
                                />
                              ))}
                          </Row>
                          {width > breakpoint2 &&
                          currentCategoryNewsWithoutSingleNews.length !== 0 ? (
                            <Paging
                              currentPage={currentPage}
                              totalCount={
                                currentCategoryNewsWithoutSingleNews.length
                              }
                              pageSize={4}
                              onPageChange={(page) => setCurrentPage(page)}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
              <div className="cat-left-content s-n-right-content">
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
                        parseInt(a.views) > parseInt(b.views) ? -1 : 1
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
                <div className="trend--img-container">
                  <img src={cybertruck} alt="tesla" className="trend-img" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default GetNews
