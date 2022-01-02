import React from 'react'
import './currentpodcast-style.css'
const CurrentPodcastHeader = ({ podcastDetails }) => {
  return (
    <div className="current-podcast-header-bg">
      <div className="current-podcast-heading">
        <div className="current-pod-header-img-cont">
          <img src={podcastDetails.artworkUrl600} alt="artwork" className='pod-detials-img'/>
        </div>
        <div className="pod-header-showcase-right">
          <h2 className="pod-header-h2">{podcastDetails.collectionName}</h2>
          <p className="pod-header-child">{podcastDetails.artistName}</p>
          <div className="pod-collection-tags">
            {podcastDetails.genres.map((genre) => (
              <span key={genre} className="pod-tag">
                {genre}
              </span>
            ))}
          </div>
          <p className="pod-episode-count">
            {podcastDetails.trackCount} Episodes
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentPodcastHeader
