import React, { useContext, useEffect, Fragment, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import newsContext from '../../../context/news/NewsContext'
import Navbar from '../navigation/Nav/nav'
import bannerAds from '../../../assets/images/bannerads.png'
import Loader from '../../loader/Loader'
import { LargeSizeAds } from '../../homepage/ads/Ads'
import {
  NotLoggedIn,
  LoggedInNotSubscribed,
} from '../../generalNews/FreeReaderPersuader'
import ReactHtmlParser from 'react-html-parser'
import authContext from '../../../context/auth/authContext'
import { Row } from 'react-bootstrap'
import cybertruck from '../../../assets/images/cybertruck1.jpg'
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml'
import { useViewPort } from '../../hooks/Viewport'
import LatestRelatedNews from '../../generalNews/LatestRelatedNews'
import LatestShareNews from '../../generalNews/LatestShareNews'
import Footer from '../../reusables/navigation/Footer/footer'
import TeaserCard from '../../homepage/homepageTeaser/TeaserCard'
import Paging from '../../reusables/Paging'
import Moment from 'react-moment'

const LatestDaily = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const context = useContext(newsContext)
  const auth = useContext(authContext)
  const { user, isAuthenticated } = auth
  const { width } = useViewPort()
  const breakpoint2 = 994
  const {
    latestLoading,
    latestNews,
    getLatestNews,
    getNews,
    news,
    loading,
  } = context
  const { slug } = useParams()

  useEffect(() => {
    getLatestNews()
    getNews()
    //eslint-disable-next-line
  }, [slug])

  if (latestLoading || loading) {
    return <Loader />
  }

  const currentNews = latestNews.find((news) => news.post_title === slug)

  const getAdjacentPosts = (slug) => {
    const postIndex = latestNews.findIndex(
      (postHeader) => postHeader?.post_title === slug,
    )

    return {
      previous:
        postIndex <= 0
          ? ''
          : {
              slug: latestNews[postIndex - 1].post_title,
            },
      next:
        postIndex >= latestNews.length - 1
          ? ''
          : {
              slug: latestNews[postIndex + 1].post_title,
            },
    }
  }
  const currentCategoryNewsWithoutSingleNews = latestNews.filter(
    (news) => news.post_title !== currentNews.post_title,
  )

  const { previous, next } = getAdjacentPosts(slug)
  const firstPageIndex = (currentPage - 1) * 4
  const lastPageIndex = firstPageIndex + 4

  console.log(news)
  console.log(latestNews)
  console.log(currentNews)
  console.log(previous)
  console.log(next)

  return (
    <Fragment>
      <Navbar />
      <div className="showcase section-content-default">
        <div className="section-wrapper-default">
          <div className="s-n-ads-container">
            <LargeSizeAds img={bannerAds} />
          </div>
          <main className="single-news-main-section">
            <div className="s-n-content-grid">
              <div className="s-n-left-content">
                <div className="available-content">
                  <h5 className="news-post-title section-heading-default">
                    {currentNews.post_title}
                  </h5>
                  <div className="news-author-details">
                    <p className="post-comp">
                      Posted on{' '}
                      <Moment format="MMMM Do YYYY">
                        {currentNews.post_date}
                      </Moment>
                    </p>
                  </div>
                  <div className="main-content">
                    {ReactHtmlParser(
                      `${
                        isAuthenticated
                          ? currentNews.post_content
                          : currentNews.post_content.substring(0, 1500)
                      }`,
                      HtmlParseOptions,
                    )}
                  </div>
                  {isAuthenticated ? (
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
                  <LatestShareNews next={next} previous={previous} />
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
                              <LatestRelatedNews
                                key={categ.ID}
                                slug={categ.post_title}
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
                          ''
                        )}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div className="cat-left-content s-n-right-content">
                <h5 className="cat-left-heading">Trending Posts</h5>
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

export default LatestDaily
