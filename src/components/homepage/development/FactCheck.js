import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LargeSizeAds } from '../ads/Ads'
import { ExploreMore } from '../ExploreMore'
import './development.css'
import { DevelopmentCard } from './DevelopmentCard'
import largeAds from './../../../assets/images/largeads.png'
import Calabar from './../../../assets/images/calabar-carnival-3.jpg'

export const FactCheck = ({ data }) => {
  return (
    <section className="fact-check-section">
      <div className="fact-check-wrapper">
        <div className="fact-content-grid">
          <div className="right-check">
            <div className="fact-heading">
              <h5 className="fact-check-heading">Fact Check Africa</h5>
              <i class="fas fa-arrow-right"></i>
            </div>
            <div className="fact-img-container">
              <img src={Calabar} alt="calabar" className="f-c-img" />
            </div>
            <div className="fact-content-list">
              {data.slice(34, 37).map((item) => (
                <div className="fact-check-list-item">
                  <div className="fact-list-img-container left-text">
                    <img
                      src={`https://api.tv24africa.com/public/storage/post_image/${item.featured_image}`}
                      alt="factCheck"
                      className="f-c-l-img"
                    />
                  </div>
                  <p className="f-c-text">{item.slug}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="left-check">
            <div className="fact-heading">
              <h5 className="fact-check-heading">In-depth Africa</h5>
              <i class="fas fa-arrow-right"></i>
            </div>
            <div className="fact-img-container">
              <img src={Calabar} alt="calabar" className="f-c-img" />
            </div>
            <div className="fact-content-list">
              {data.slice(37, 40).map((item) => (
                <div className="fact-check-list-item right-text">
                  <div className="fact-list-img-container">
                    <img
                      src={`https://api.tv24africa.com/public/storage/post_image/${item.featured_image}`}
                      alt="factCheck"
                      className="f-c-l-img"
                    />
                  </div>
                  <p className="f-c-text">{item.slug.substring(0, 100)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactCheck
