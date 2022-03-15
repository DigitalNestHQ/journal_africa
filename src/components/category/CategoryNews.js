import React, { useState, useEffect, Fragment, useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as newsActions from "../../store/actions/newsActions"
import Footer from "../reusables/navigation/Footer/Footer"
import CategoryCard from "./CategoryCard"
import { useLocation, Link } from "react-router-dom"
import Loader from "../loader/Loader"
import "./newscategory.css"
import Nav from "../reusables/navigation/Nav/Nav"
import newsContext from "../../context/news/NewsContext"
import LargeAds from "../../assets/images/bannerads.png"
import "../homepage/ads/ads.css"
import { LargeSizeAds } from "../homepage/ads/Ads"
import TeaserCard from "../homepage/homepageTeaser/TeaserCard"
import cybertruck from "../../assets/images/cybertruck1.jpg"
import Layout from "../layout/mainlayout/Layout"

const CategoryNews = () => {
  const dispatch = useDispatch()
  const getCategory = useSelector((state) => state.getCategory)
  const {
    loading: categoryLoading,
    categoryNews,
    error: categoryError,
  } = getCategory
  const getNews = useSelector((state) => state.getNews)
  const { loading: newsLoading, error: newsError, news } = getNews
  const [numberOfCategCard, setNumberOfCategCard] = useState(5)
  const { search } = useLocation()
  const x = new URLSearchParams(search)
  const category = x.get("category")

  const handleMore = () => {
    setNumberOfCategCard((prev) => prev + 2)
  }

  useEffect(() => {
    dispatch(newsActions.getNews())
    dispatch(newsActions.getCategoryNews(`${category}`))
  }, [category, dispatch])

  if (categoryLoading || newsLoading) {
    return <Loader />
  }

  return (
    <Layout category={true}>
      {!categoryLoading && categoryNews.length === 0 ? (
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

      <div className="cat-img-container">
        <LargeSizeAds img={LargeAds} />
      </div>
      <div className="categ-content">
        <div className="categ-content-grid">
          <div className="cat-right-content">
            {!categoryLoading && categoryNews.length === 0 ? (
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
              ""
            )}
          </div>
          <div className="cat-left-content">
            <h5 className="cat-left-heading section-heading-default">
              Trending Posts
            </h5>
            <div className="trend-img-container">
              <img src={cybertruck} alt="tesla" className="trend-img" />
            </div>
            <div className="trending-posts">
              {!newsLoading && news.length === 0 ? (
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
            <div className="trend-img-container">
              <img src={cybertruck} alt="tesla" className="trend-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="cat-img-container">
        <LargeSizeAds img={LargeAds} />
      </div>
    </Layout>
  )
}

export default CategoryNews
