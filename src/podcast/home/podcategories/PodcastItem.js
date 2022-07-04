import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import play_button from '../../../assets/images/play_button.svg';
import './podCategory.css';
import drop_down from '../../../assets/images/caret-down-solid.svg';
import './podCategory.css';

const PodcastItem = ({ podcastItem }) => {
  const [state, setState] = useState(false);

  const handleSubscribe = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div key={podcastItem.name} className='pod-collections'>
      <div className='pod-grid'>
        <div className='pod-img-container'>
          <img
            src={podcastItem.image}
            alt='podcast-artwork'
            className='pod-img'
          />
        </div>
        <div className='pod-collection-details'>
          <div className='pod-intro-details'>
            <p className='pod-text'>
              {podcastItem.description
                ? podcastItem.description
                : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.`}
            </p>
            <p className='pod-text'>
              {podcastItem.description
                ? podcastItem.description
                : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.`}
            </p>
          </div>
          <div className='pod-cta'>
            <button
              className='pod-btn play-button'
              // onClick={() => history.push(`/podcast/${podcast.author_id}`)}
            >
              <img src={play_button} alt='play' />
              Play Latest episode
            </button>
            <button
              className='pod-btn pod-subscribe'
              style={{ 'background-color': `${state ? 'black' : 'red'}` }}
              onClick={handleSubscribe}
            >
              Subscribe
              <img
                src={drop_down}
                alt='drop'
                style={{
                  transform: `${state ? 'rotate(180deg)' : 'rotate(360deg)'}`,
                }}
              />
              {state && (
                <ul className='subscribe-div'>
                  <li className='subscribe-item'>Apple Podcast</li>
                  <li className='subscribe-item'>Google</li>
                  <li className='subscribe-item'>Spotify</li>
                </ul>
              )}
            </button>
          </div>
        </div>
      </div>
      <Link to={`/podcast/${podcastItem.author_id}`} className='pod-episodes'>
        ALL EPISODES
      </Link>
    </div>
  );
};

export default PodcastItem;
