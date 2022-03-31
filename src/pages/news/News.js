import React, { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as newsActions from "../../store/actions/newsActions"
import * as userActions from "../../store/actions/userActions"
import Layout from "../../components/layout/mainlayout/Layout"
import bannerAds from "./../../assets/images/bannerads.png"
import ReactHtmlParser from "react-html-parser"
import { useParams, Link } from "react-router-dom"
import Loader from "../../components/loader/Loader"
import "./allNews.css"
import {
  NotLoggedIn,
  LoggedInNotSubscribed,
} from "../../components/generalNews/FreeReaderPersuader"
import { LargeSizeAds } from "../../components/homepage/ads/Ads"
import TeaserCard from "../../components/homepage/homepageTeaser/TeaserCard"
import { Row } from "react-bootstrap"
import cybertruck from "../../assets/images/cybertruck1.jpg"
import { HtmlParseOptions } from "../../_helper/parseNewsHtml"
import { useViewPort } from "../../components/hooks/Viewport"
import "../../pages/category/newscategory.css"
import RelatedNews from "../../components/generalNews/RelatedNews"
import ShareNews from "../../components/generalNews/ShareNews"
import Paging from "../../components/reusables/Paging"
import Moment from "react-moment"

const GetNews = () => {
  const dispatch = useDispatch()
  // declaring redux reducers states and destructring thier property values
  const loginUser = useSelector((state) => state.loginUser)
  const { token } = loginUser
  const getUser = useSelector((state) => state.getUser)
  const { user: authUser } = getUser
  const getAllNews = useSelector((state) => state.getNews)
  const { loading: getNewsLoading, news } = getAllNews

  const getSinglePost = useSelector((state) => state.getSingleNews)
  const { loading: singlePostLoading, singleNews } = getSinglePost

  const [currentPage, setCurrentPage] = useState(1)
  const { slug } = useParams()
  const { width } = useViewPort()
  const breakpoint2 = 994

  const getAdjacentPosts = useCallback(
    (slug) => {
      const currentCategoryNews = news?.filter(
        (news) => news.category_id === singleNews?.category_id
      )
      const postIndex = currentCategoryNews?.findIndex(
        (postHeader) => postHeader.slug === slug
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
    dispatch(newsActions.getSingleNews(slug))
    dispatch(newsActions.getNews())
  }, [dispatch, slug])

  useEffect(() => {
    if (token) dispatch(userActions.getUser())
  }, [dispatch, token])

  useEffect(() => {
    if (singleNews === null) {
      return
    } else {
      if (singleNews.id) {
        dispatch(newsActions.addView({ id: `${singleNews.id}` }))
      }
    }
  }, [dispatch, singleNews])

  if (singlePostLoading || getNewsLoading) {
    return <Loader />
  }

  const currentCategoryNews = news?.filter(
    (news) => news.category_id === singleNews?.category_id
  )

  const currentCategoryNewsWithoutSingleNews = currentCategoryNews?.filter(
    (news) => {
      return news.id !== singleNews?.id
    }
  )

  const { previous, next } = getAdjacentPosts(slug)

  const firstPageIndex = (currentPage - 1) * 4
  const lastPageIndex = firstPageIndex + 4

  return (
    <Layout category={true}>
      <div className="s-n-ads-container">
        <LargeSizeAds img={bannerAds} />
      </div>
      <main className="single-news-main-section">
        <div className="s-n-content-grid">
          <div className="s-n-left-content">
            {!singlePostLoading && singleNews === null ? (
              <h5>Post Unavailable - Please check your internet connection</h5>
            ) : (
              <div className="available-content">
                <h5 className="news-post-title section-heading-default">
                  {singleNews.post_title}
                </h5>
                <div className="news-author-details">
                  <p className="author-name-comp">
                    By <strong>{singleNews.author_name}</strong>
                  </p>
                  <p className="post-comp">
                    Posted on{" "}
                    <Moment format="MMMM Do YYYY">
                      {singleNews.updated_at}
                    </Moment>
                  </p>
                </div>
                <div className="news-img-container">
                  <img
                    src={`https://api.tv24africa.com/public/storage/post_image/${singleNews.featured_image}`}
                    alt="featuredImg"
                    className="news-img"
                  />
                </div>

                <div className="main-content">
                  {ReactHtmlParser(
                    `${
                      singleNews?.post_type === "premium" && token !== null
                        ? authUser?.subscription_status
                          ? singleNews?.post_description
                          : singleNews?.post_description.substring(0, 1500)
                        : singleNews?.post_type === "premium" && token === null
                        ? singleNews?.post_description.substring(0, 1500)
                        : singleNews?.post_description
                    }`,
                    HtmlParseOptions
                  )}
                </div>
                {singleNews?.post_type === "premium" && token ? (
                  authUser?.subscription_status ? (
                    <div></div>
                  ) : (
                    <div className="blur-content"></div>
                  )
                ) : singleNews?.post_type === "premium" && token === null ? (
                  <div className="blur-content"></div>
                ) : (
                  <div className=""></div>
                )}
                <div className="check-mate">
                  {singleNews?.post_type === "premium" && token === null ? (
                    <LoggedInNotSubscribed />
                  ) : singleNews?.post_type === "premium" && token !== null ? (
                    authUser?.subscription_status ? (
                      ""
                    ) : (
                      <LoggedInNotSubscribed />
                    )
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
              {!getNewsLoading && news.length === 0 ? (
                <h5 className="text-dark">
                  No trending news available - Please check your internet
                  connection
                </h5>
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
    </Layout>
  )
}

export default GetNews
