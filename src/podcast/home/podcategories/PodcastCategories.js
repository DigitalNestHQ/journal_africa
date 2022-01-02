import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import pause_button from '../../../assets/images/pause_button.svg'
import play_button from '../../../assets/images/play_button.svg'
import './podnavbar.css'
// import hambuger from './../../../assets/images/hamburger.png'
const PodcastCategories = ({ header, podcasts }) => {
  const history = useHistory()
  return (
    <div className="each-pod-category">
      <div className="pod-category-header">
        <h5 className="section-heading-default-pod text-white pod-header">
          {header}
        </h5>
      </div>
      <div className="pod-category-list">
        {podcasts.slice(0, podcasts.length).map((podcast) => (
          <div key={podcast.collectionName} className="pod-collections">
            <div className="pod-grid">
              <div className="pod-img-container">
                {/* <p className="pod-title">{podcast.collectionName}</p> */}
                <img
                  src={podcast.artworkUrl600}
                  alt="podcast-artwork"
                  className="pod-img"
                />
              </div>
              <div className="pod-collection-details">
                <div className="pod-intro-details">
                  <p className="pod-text">
                    Damini Ebunoluwa Ogulu (born 2 july 1991), known
                    professionally as Burna Boy, is a Nigerian singer,
                    songwriter, rapper, and dancer. He is one of the biggest and
                    most successful African artists.
                  </p>
                  <p className="pod-text">
                    He rose to prominence in 2012 after releasing "Like to
                    Party", the lead single from his debut studio album L.I.F.E
                    (2013). In 2017, Burna Boy signed with Bad Habit/Atlantic
                    Records in the United States and Warner Music Group
                    internationally.
                  </p>
                </div>
                <div className="pod-cta">
                  <button
                    className="pod-btn play-button"
                    onClick={() =>
                      history.push(`/podcast/${podcast.collectionId}`)
                    }
                  >
                    <img src={play_button} alt="play" />
                    Play Latest episode
                  </button>
                  <button
                    className="pod-btn pod-subscribe"
                    onClick={() => history.push(`/subscribe`)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <Link
              to={`/podcast/${podcast.collectionId}`}
              className="pod-episodes"
            >
              ALL EPISODES
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PodcastCategories
