import React from 'react'
import EpisodeDesc from './EpisodeDesc'

const PodDetailsEpisodes = ({ episodes }) => {
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
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default PodDetailsEpisodes
