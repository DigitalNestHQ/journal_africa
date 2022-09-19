import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import play_button from '../../../assets/images/play_button.svg';
import drop_down from '../../../assets/images/caret-down-solid.svg';
import './podCategory.css';

const PodcastItem = ({ podcastItem }) => {
  const [state, setState] = useState(false);
  const [podCastAudio, setPodCastAudio] = useState({
    audioUrl: podcastItem.audio,
    playing: false,
  });
  const audioFile = useRef();

  const handleSubscribe = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const handleAudioPlayer = () => {
    setPodCastAudio({ audioUrl: podcastItem.audio, playing: true });
  };

  return (
    <div key={podcastItem.name} className='pod-collections'>
      <h2>{podcastItem.category}</h2>
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
              {podcastItem.episode
                ? podcastItem.episode
                : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.`}
            </p>
            <p className='pod-text'>
              {podcastItem.description
                ? podcastItem.description
                : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.`}
            </p>
          </div>
          <div className='pod-cta'>
            {podCastAudio.playing ? (
              <audio src={podCastAudio.audioUrl} controls ref={audioFile} />
            ) : (
              <button
                className='pod-btn play-button'
                onClick={handleAudioPlayer}
              >
                <img src={play_button} alt='play' />
                Play Latest episode
              </button>
            )}

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
      <Link to={`/podcast/${podcastItem.category}`} className='pod-episodes'>
        ALL EPISODES
      </Link>
    </div>
  );
};

export default PodcastItem;
