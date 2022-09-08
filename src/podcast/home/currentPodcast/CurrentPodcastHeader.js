import React from 'react';
import './currentpodcast-style.css';
const CurrentPodcastHeader = ({ podcastDetails }) => {
  return (
    <div className='current-podcast-header-bg'>
      <div className='current-podcast-heading'>
        <div className='current-pod-header-img-cont'>
          <img
            src={podcastDetails.image}
            alt='artwork'
            className='pod-detials-img'
          />
        </div>
        <div className='pod-header-showcase-right'>
          <h2 className='pod-header-h2'>{podcastDetails.category}</h2>
          <p className='pod-header-child'>{podcastDetails.author}</p>
          {/* <div className="pod-collection-tags">
            {podcastDetails.genres.map((genre) => (
              <span key={genre} className="pod-tag">
                {genre}
              </span>
            ))}
          </div> */}
          <p className='pod-episode-count'>
            {podcastDetails.author_id} Episodes
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPodcastHeader;
