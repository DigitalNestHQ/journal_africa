import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as newsActions from "../../store/actions/newsActions"
import CategoryCard from "../../components/category/CategoryCard"
import { useLocation, Link } from "react-router-dom"
import Loader from "../../components/loader/Loader"
import "./newscategory.css"
import LargeAds from "../../assets/images/bannerads.png"
import "../../components/homepage/ads/ads.css"
import { LargeSizeAds } from "../../components/homepage/ads/Ads"
import TeaserCard from "../../components/homepage/homepageTeaser/TeaserCard"
import cybertruck from "../../assets/images/cybertruck1.jpg"
import { useViewPort } from "../../components/hooks/Viewport"
import Layout from "../../components/layout/mainlayout/Layout"

const SubcategoryNews = () => {
  const dispatch = useDispatch()
  const getCategory = useSelector((state) => state.getCategory)
  const { loading: categoryLoading, categoryNews } = getCategory
  const getNews = useSelector((state) => state.getNews)
  const { loading: newsLoading, news } = getNews
  const { search } = useLocation()
  const x = new URLSearchParams(search)
  const subcategory = x.get("subcategory")
  const [numberOfCategCard, setNumberOfCategCard] = useState(5)
  const { width } = useViewPort()
  const breakpoint = 991

  useEffect(() => {
    dispatch(newsActions.getNews())
    dispatch(newsActions.getCategoryNews("Discover Africa"))
  }, [dispatch, subcategory])

  if (categoryLoading || newsLoading) {
    return <Loader />
  }

  const getCategories = categoryNews?.filter(
    (c) => c.sub_category === subcategory
  )
  const handleMore = () => {
    setNumberOfCategCard((prev) => prev + 2)
  }

  return (
    <Layout category={true}>
      {!categoryLoading && getCategories.length === 0 ? (
        <div className="category-comp-heading">
          <h5 className="category-header section-heading-default">
            No news available
          </h5>
        </div>
      ) : (
        <div className="category-comp-heading">
          <h5 className="category-header section-heading-default">
            {getCategories[0].sub_category}
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
                {!categoryLoading && getCategories.length === 0 ? (
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
                  ""
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
                    {!newsLoading && news.length === 0 ? (
                      <h5 className="text-dark">No trending news available</h5>
                    ) : (
                      news.slice(0, 3).map((eachCard) => (
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
                ""
              )}
            </div>
          </div>
          <div className="cat-img-container">
            <LargeSizeAds img={LargeAds} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SubcategoryNews
