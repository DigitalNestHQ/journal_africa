import React from 'react'
import { Link } from 'react-router-dom'
// import { LargeSizeAds } from '../ads/Ads'
// import { ExploreMore } from '../ExploreMore'
import './development.css'
// import { DevelopmentCard } from './DevelopmentCard'
// import largeAds from './../../../assets/images/largeads.png'
import Calabar from './../../../assets/images/calabar-carnival-3.jpg'

export const FactCheck = ({ data }) => {
  const factCheck = data.filter(
    (news) => news.category_id === 'Fact Check Africa',
  )
  const indepthAfrica = data.filter(
    (news) => news.category_id === 'In-Depth Africa',
  )
  return (
    <section className="fact-check-section">
      <div className="fact-check-wrapper">
        <div className="fact-content-grid">
          <div className="right-check">
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=${factCheck[0].category_id}`,
              }}
              className="fact-heading"
            >
              <h5 className="fact-check-heading font-bold">
                Fact Check Africa
              </h5>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <div className="fact-img-container">
              <img
                src={`https://api.tv24africa.com/public/storage/post_image/${factCheck[0].featured_image}`}
                alt="calabar"
                className="f-c-img"
              />
            </div>
            <div className="fact-content-list">
              {factCheck.slice(0, 3).map((item) => (
                <Link
                  to={`/post/${item.slug}`}
                  className="fact-check-list-item"
                  key={item.id}
                >
                  <div className="fact-list-img-container left-text">
                    <img
                      src={`https://api.tv24africa.com/public/storage/post_image/${item.featured_image}`}
                      alt="factCheck"
                      className="f-c-l-img"
                    />
                  </div>
                  <p className="f-c-text font-bold">{item.slug}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="left-check">
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=${indepthAfrica[0].category_id}`,
              }}
              className="fact-heading"
            >
              <h5 className="fact-check-heading font-bold">In-depth Africa</h5>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <div className="fact-img-container">
              <img
                src={`https://api.tv24africa.com/public/storage/post_image/${indepthAfrica[0].featured_image}`}
                alt="calabar"
                className="f-c-img"
              />
            </div>
            <div className="fact-content-list">
              {indepthAfrica.slice(0, 3).map((item) => (
                <Link
                  to={`/post/${item.slug}`}
                  className="fact-check-list-item right-text"
                  key={item.id}
                >
                  <div className="fact-list-img-container">
                    <img
                      src={`https://api.tv24africa.com/public/storage/post_image/${item.featured_image}`}
                      alt="factCheck"
                      className="f-c-l-img"
                    />
                  </div>
                  <p className="f-c-text font-bold">
                    {item.slug.substring(0, 100)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactCheck
