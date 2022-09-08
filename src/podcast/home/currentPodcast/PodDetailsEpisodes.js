import React from 'react';
import EpisodeDesc from './EpisodeDesc';
import ReleaseDate from './ReleaseDate';
import EpisodeDuration from './EpisodeDuration';
import play_button from '../../../assets/images/play_button.svg';
import { Link } from 'react-router-dom';

const PodDetailsEpisodes = ({ episodes }) => {
  const createdDate = new Date(episodes[0].created_at);

  return (
    <>
      {episodes && (
        <>
          {episodes.map((episode) => (
            <div key={createdDate} className='pod-episode-card'>
              <div className='pod-episode-card-img-container'>
                <img
                  src={episode.image}
                  alt='User avatar'
                  className='pod-episode-card-img'
                />
              </div>
              <div className='pod-episode-details'>
                <h5 className='pod-episode-track-name'>{episode.episode}</h5>
                <EpisodeDesc
                  desc={episode.description}
                  characterCount={150}
                  readMore={true}
                />
                <div className='pod-pause-play-section'>
                  <Link
                    className='pod-play-button'
                    to={{
                      pathname: `/podcast/single/${episode.id}`,
                      search: `?searchpod=${episode.id}`,
                    }}
                  >
                    <img src={play_button} alt='play' />
                  </Link>
                  <ReleaseDate date={createdDate.toLocaleDateString()} />
                  <EpisodeDuration duration={episode.trackTimeMillis} />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PodDetailsEpisodes;
