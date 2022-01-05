import React from 'react'
import { useLocation, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../../utils/constants'
import Loader from '../../../components/loader/Loader'
import NavBar from '../../../components/reusables/navigation/Nav/nav'
import Footer from '../../../components/reusables/navigation/Footer/footer'
import ReleaseDate from '../currentPodcast/ReleaseDate'
import cybertruck from '../../../assets/images/cybertruck1.jpg'
import PodcastPlayer from './PodcastPlayer'

const CurrentPodCastPlayer = () => {
  const { search } = useLocation()
  const x = new URLSearchParams(search)
  const currentPod = x.get('searchpod')
  const { collectionId } = useParams()
  const [podcast, setPodcast] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const history = useHistory()

  React.useEffect(() => {
    const fetchPods = async () => {
      setLoading(true)
      getPodcast(collectionId)
        .then((data) => {
          setPodcast(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }
    fetchPods()
  }, [collectionId])

  if (podcast === null || loading) {
    return <Loader />
  }

  const realPodcast = podcast.slice(1)

  const getCurrentPod = realPodcast?.filter(
    (pod) => pod.trackId === parseInt(currentPod),
  )

  // console.log(getCurrentPod)
  // console.log(typeof currentPod)
  // console.log(typeof realPodcast[0].trackId)

  return (
    <>
      <NavBar />
      <header className="section-content-default pod-content">
        <div className="section-wrapper-default">
          <div className="current-pod-player-header">
            <h1 className="current-pod-player-heading">
              {getCurrentPod[0].trackName}
            </h1>
          </div>
        </div>
      </header>
      <div className="current-pod-player-details">
        <div className="section-content-default">
          <div className="section-wrapper-default">
            <div className="current-pod-player-details-grid">
              <div className="pod-player-left-grid">
                <ReleaseDate date={getCurrentPod[0].releaseDate} />
                <div className="current-episode-details-text">
                  {getCurrentPod[0].description}
                </div>
                <PodcastPlayer data={getCurrentPod[0]} />
              </div>
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

const getPodcast = async (collectionId) => {
  const response = await axios.get(
    `${BASE_URL}lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=400`,
  )

  return response.data.results
}
