import React from "react"
import { useLocation, useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as podcastsActions from "../../../store/actions/podcastActions"
import Loader from "../../../components/loader/Loader"
import NavBar from "../../../components/reusables/navigation/Nav/Nav"
import Footer from "../../../components/reusables/navigation/Footer/Footer"
import ReleaseDate from "../currentPodcast/ReleaseDate"
import cybertruck from "../../../assets/images/cybertruck1.jpg"
import PodcastPlayer from "./PodcastPlayer"

const CurrentPodCastPlayer = () => {
  const { search } = useLocation()
  const x = new URLSearchParams(search)
  const currentPod = x.get("searchpod")
  const { collectionId } = useParams()
  const dispatch = useDispatch()
  const getSinglePodcasts = useSelector((state) => state.getSinglePodcasts)
  const { loading, error, podcast } = getSinglePodcasts

  const history = useHistory()

  React.useEffect(() => {
    dispatch(podcastsActions.getSinglePodcasts(collectionId))
  }, [dispatch, collectionId])

  if (loading) {
    return <Loader />
  }

  const realPodcast = podcast?.slice(1)

  const getCurrentPod = realPodcast?.filter(
    (pod) => pod.trackId === parseInt(currentPod)
  )

  return (
    <>
      <NavBar />
      <header className="section-content-default pod-content">
        <div className="section-wrapper-default">
          <div className="current-pod-player-header">
            <h1 className="current-pod-player-heading">
              {(!loading && podcast.length === 0) || error
                ? "Episode unavailable"
                : getCurrentPod[0].trackName}
            </h1>
          </div>
        </div>
      </header>
      <div className="current-pod-player-details">
        <div className="section-content-default">
          <div className="section-wrapper-default">
            <div className="current-pod-player-details-grid">
              {(!loading && podcast.length === 0) || error ? (
                "Episode unavailable"
              ) : (
                <div className="pod-player-left-grid">
                  <ReleaseDate date={getCurrentPod[0].releaseDate} />
                  <div className="current-episode-details-text">
                    {getCurrentPod[0].description}
                  </div>
                  <PodcastPlayer data={getCurrentPod[0]} />
                </div>
              )}

              <div className="pod-player-right-grid">
                <div className="pod-ads">
                  <div className="pod-home-ad-sense">
                    <img
                      src={cybertruck}
                      alt="ads"
                      className="pod-home-ad-sense-img"
                    />
                  </div>
                  <div className="pod-home-ad-sense">
                    <img
                      src={cybertruck}
                      alt="ads"
                      className="pod-home-ad-sense-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pod-go-back-button">
              <button
                onClick={() => history.goBack()}
                className="pod-go-back-btn"
              >
                back to podcast
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CurrentPodCastPlayer
