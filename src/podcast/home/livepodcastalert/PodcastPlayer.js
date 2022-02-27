import React from 'react'
import { useSoundLayerValue } from '../../../context/podcast/SoundLayer'
import {
  EPISODE_PLAY_REQUEST,
  EPISODE_PLAYING,
  EPISODE_PAUSE,
  CURRENT_AUDIO,
} from '../../../context/podcast/soundReducer.js'
import pause_button from '../../../assets/images/pause_button.svg'
import play_button from '../../../assets/images/play_button.svg'
import { Link } from 'react-router-dom'

const PodcastPlayer = ({ data }) => {
  const [
    {
      isPlaying,
      episode: { episodeUrl },
      currentAudio,
    },
    dispatch,
  ] = useSoundLayerValue()

  const play = (episode) => {
    const episodesDetails = getEpisodeDetails(episode)
    dispatch({
      type: EPISODE_PLAY_REQUEST,
      payload: episodesDetails,
    })

    try {
      dispatch({
        type: EPISODE_PLAYING,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const pause = () => {
    dispatch({
      type: EPISODE_PAUSE,
    })
  }

  const getEpisodeDetails = (episode) => {
    // episode object has so many properties, take only relevant ones
    const {
      episodeUrl,
      artworkUrl60,
      trackId,
      trackTimeMillis,
      trackName,
      shortDescription,
      collectionName,
    } = episode

    const episodeDetails = {
      episodeUrl,
      artworkUrl60,
      trackId,
      trackTimeMillis,
      trackName,
      shortDescription,
      collectionName,
    }
    return episodeDetails
  }

  React.useEffect(() => {
    if (episodeUrl !== data.episodeUrl && isPlaying) {
      currentAudio.pause()
      dispatch({
        type: EPISODE_PAUSE,
      })
    }
    // eslint-disable-next-line
  }, [])

  const handlePlay = (episode) => (e) => {
    let sound
    if (!episodeUrl) {
      sound = new Audio(episode.episodeUrl)
      sound.play()
      dispatch({
        type: CURRENT_AUDIO,
        payload: sound,
      })
      play(episode)
    } else if (episodeUrl !== episode.episodeUrl) {
      currentAudio.pause()
      sound = new Audio(episode.episodeUrl)
      sound.play()
      dispatch({
        type: CURRENT_AUDIO,
        payload: sound,
      })
      play(episode)
    } else {
      currentAudio.play()
      play(episode)
    }
  }

  const handlePause = () => {
    currentAudio.pause()
    pause()
  }

  return (
    <div className="pod-play-area-section">
      <>
        <div className="pod-play-area-wrapper">
          <div className="play-pause-button-component">
            {isPlaying ? (
              <button onClick={(e) => handlePause()} className="pod-handle-pause">
                <img src={pause_button} alt="pause" />
              </button>
            ) : (
              <button onClick={(e) => handlePlay(data)(e)} className="pod-handle-play">
                {' '}
                <img src={play_button} alt="play" />{' '}
              </button>
            )}
            <div className="play-pause-desc">{data.trackName}</div>
          </div>
          <div className="share-podcast">
            <span className="podcast-share-links">Share</span>
            <span className="podcast-share-links">Subscribe</span>
            <span className="podcast-share-links">Cookie Policy</span>
          </div>
        </div>
      </>
    </div>
  )
}

export default PodcastPlayer
