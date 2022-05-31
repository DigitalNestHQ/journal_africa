import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import * as newsActions from "../../store/actions/newsActions";
import * as userActions from "../../store/actions/userActions";
import Layout from "../../components/layout/mainlayout/Layout";
import bannerAds from "../../assets/images/bannerads.png";
import Loader from "../../components/loader/Loader";
import { LargeSizeAds } from "../../components/homepage/ads/Ads";
import {
  NotLoggedIn,
  LoggedInNotSubscribed,
} from "../../components/generalNews/FreeReaderPersuader";
import ReactHtmlParser from "react-html-parser";
import { Row } from "react-bootstrap";
import cybertruck from "../../assets/images/cybertruck1.jpg";
import { HtmlParseOptions } from "../../_helper/parseNewsHtml";
import { useViewPort } from "../../components/hooks/Viewport";
import LatestRelatedNews from "../../components/generalNews/LatestRelatedNews";
import LatestShareNews from "../../components/generalNews/LatestShareNews";
import TeaserCard from "../../components/homepage/homepageTeaser/TeaserCard";
import Paging from "../../components/reusables/Paging";
import Moment from "react-moment";

const LatestDaily = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);
  const { token } = loginUser;
  const getUser = useSelector((state) => state.getUser);
  const { user: authUser } = getUser;
  const getAllNews = useSelector((state) => state.getNews);
  const { loading: getNewsLoading, news } = getAllNews;
  const getWordpress = useSelector((state) => state.getWordpress);
  const { loading: wordpressLoading, wordpressNews } = getWordpress;
  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useViewPort();
  const breakpoint2 = 994;
  const { slug } = useParams();

  const currentNews = wordpressNews?.find((news) => news.post_title === slug);

  const getAdjacentPosts = (slug) => {
    const postIndex = wordpressNews?.findIndex(
      (postHeader) => postHeader.post_title === slug
    );

    return {
      previous:
        postIndex <= 0
          ? ""
          : {
              slug: wordpressNews[postIndex - 1].post_title,
            },
      next:
        postIndex >= wordpressNews.length - 1
          ? ""
          : {
              slug: wordpressNews[postIndex + 1].post_title,
            },
    };
  };

  useEffect(() => {
    dispatch(newsActions.getWordpressNews());
    dispatch(newsActions.getNews());
  }, [dispatch, slug]);

  useEffect(() => {
    if (token) dispatch(userActions.getUser());
  }, [dispatch, token]);

  useEffect(() => {
    if (!currentNews) {
      return;
    } else {
      if (currentNews.ID) {
        dispatch(newsActions.addView({ id: `${currentNews.ID}` }));
      }
    }
  }, [dispatch, currentNews]);

  if (getNewsLoading || wordpressLoading) {
    return <Loader />;
  }

  const currentCategoryNewsWithoutSingleNews = wordpressNews?.filter(
    (news) => news.post_title !== currentNews.post_title
  );

  const { previous, next } = getAdjacentPosts(slug);
  const firstPageIndex = (currentPage - 1) * 4;
  const lastPageIndex = firstPageIndex + 4;

  return (
    <Layout category={true}>
      <div className="s-n-ads-container">
        <LargeSizeAds img={bannerAds} />
      </div>
      <main className="single-news-main-section">
        <div className="s-n-content-grid">
          <div className="s-n-left-content">
            {!wordpressLoading && wordpressNews.length === 0 ? (
              <h5>Post Unavailable - Please check your internet connection</h5>
            ) : (
              <div className="available-content">
                <h5 className="news-post-title section-heading-default">
                  {currentNews.post_title}
                </h5>
                <div className="news-author-details">
                  <p className="post-comp">
                    Posted on{" "}
                    <Moment format="MMMM Do YYYY">
                      {currentNews.post_date}
                    </Moment>
                  </p>
                </div>
                <div className="main-content">
                  {ReactHtmlParser(
                    `${
                      token !== null
                        ? authUser?.subscription_status
                          ? currentNews?.post_content
                          : currentNews?.post_content.substring(0, 1500)
                        : currentNews?.post_content.substring(0, 1500)
                    }`,
                    HtmlParseOptions
                  )}
                </div>
                {token !== null ? (
                  authUser?.subscription_status ? (
                    <div></div>
                  ) : (
                    <div className="blur-content"></div>
                  )
                ) : (
                  <div className="blur-content"></div>
                )}
                <div className="check-mate">
                  {token !== null ? (
                    <LoggedInNotSubscribed />
                  ) : token !== null ? (
                    authUser?.subscription_status ? (
                      ""
                    ) : (
                      <LoggedInNotSubscribed />
                    )
                  ) : (
                    <NotLoggedIn />
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
            <h5 className="cat-left-heading">Trending Posts</h5>
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
  );
};

export default LatestDaily;
