import React from 'react'
import EpisodeDesc from './EpisodeDesc'
import ReleaseDate from './ReleaseDate'
import EpisodeDuration from './EpisodeDuration'
import play_button from '../../../assets/images/play_button.svg'
import { useHistory } from 'react-router-dom'

const PodDetailsEpisodes = ({ episodes }) => {
  const history = useHistory()
  return (
    <>
      {episodes && (
        <>
          {episodes.map((episode) => (
            <div key={episode.releaseDate} className="pod-episode-card">
              <div className="pod-episode-card-img-container">
                <img
                  src={episode.artworkUrl160}
                  alt="User avatar"
                  className="pod-episode-card-img"
                />
              </div>
              <div className="pod-episode-details">
                <h5 className="pod-episode-track-name">{episode.trackName}</h5>
                <EpisodeDesc
                  desc={episode.description}
                  characterCount={150}
                  readMore={true}
                />
                <div className="pod-pause-play-section">
                  <button
                    className="pod-play-button"
                    onClick={() =>
                      history.push(`/podcast/play/${episode.trackId}`)
                    }
                  >
                    <img src={play_button} alt="play" />
                  </button>
                  <ReleaseDate date={episode.releaseDate} />
                  <EpisodeDuration duration={episode.trackTimeMillis} />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default PodDetailsEpisodes
