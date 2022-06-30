import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import play_button from '../../../assets/images/play_button.svg';
import './podCategory.css';
const PodcastCategories = ({ header, podcasts }) => {
  const history = useHistory();
  return (
    <div className='each-pod-category'>
      <div className='pod-category-header'>
        <h5 className='section-heading-default-pod pod-header'>{header}</h5>
      </div>
      <div className='pod-category-list'>
        {podcasts.slice(0, podcasts.length).map((podcast) => (
          <div key={podcast.name} className='pod-collections'>
            <div className='pod-grid'>
              <div className='pod-img-container'>
                <img
                  src={podcast.image}
                  alt='podcast-artwork'
                  className='pod-img'
                />
              </div>
              <div className='pod-collection-details'>
                <div className='pod-intro-details'>
                  <p className='pod-text'>
                    {podcast.description
                      ? podcast.description
                      : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.`}
                  </p>
                  <p className='pod-text'>
                    {podcast.description
                      ? podcast.description
                      : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.`}
                  </p>
                </div>
                <div className='pod-cta'>
                  <button
                    className='pod-btn play-button'
                    onClick={() =>
                      history.push(`/podcast/${podcast.author_id}`)
                    }
                  >
                    <img src={play_button} alt='play' />
                    Play Latest episode
                  </button>
                  <button
                    className='pod-btn pod-subscribe'
                    onClick={() => history.push(`/subscribe`)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <Link to={`/podcast/${podcast.author_id}`} className='pod-episodes'>
              ALL EPISODES
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastCategories;
