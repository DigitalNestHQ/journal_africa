import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { play, pause } from "../../../store/actions/podcastActions"
import pause_button from "../../../assets/images/pause_button.svg"
import play_button from "../../../assets/images/play_button.svg"

const PodcastPlayer = ({ data }) => {
  const [audio, setAudio] = React.useState({})
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.currentTrack)
  const {
    isPlaying,
    episode: { episodeUrl, collectionName },
  } = currentTrack

  document.title =
    collectionName && isPlaying ? collectionName : "Journal Africa"

  const handlePlay = (episode) => (e) => {
    let sound
    if (!episodeUrl) {
      sound = new Audio(episode.episodeUrl)
      sound.play()
      setAudio(sound)
      dispatch(play(episode))
    } else if (episodeUrl !== episode.episodeUrl) {
      audio.pause()
      sound = new Audio(episode.episodeUrl)
      sound.play()
      setAudio(sound)
      dispatch(play(episode))
    } else {
      audio.play()
      dispatch(play(episode))
    }
  }

  const handlePause = () => {
    audio.pause()
    dispatch(pause())
  }

  return (
    <div className="pod-play-area-section">
      <>
        <div className="pod-play-area-wrapper">
          <div className="play-pause-button-component">
            {isPlaying ? (
              <button
                onClick={(e) => handlePause()}
                className="pod-handle-pause"
              >
                <img src={pause_button} alt="pause" />
              </button>
            ) : (
              <button
                onClick={(e) => handlePlay(data)(e)}
                className="pod-handle-play"
              >
                {" "}
                <img src={play_button} alt="play" />{" "}
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
