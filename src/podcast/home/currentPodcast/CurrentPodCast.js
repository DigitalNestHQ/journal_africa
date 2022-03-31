import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as podcastsActions from "../../../store/actions/podcastActions"
import NavBar from "../../../components/reusables/navigation/Nav/Nav"
import Footer from "../../../components/reusables/navigation/Footer/Footer"
import Loader from "../../../components/loader/Loader"
import CurrentPodcastDetails from "./CurrentPodcastDetails"
import CurrentPodcastHeader from "./CurrentPodcastHeader"
import "./currentpodcast-style.css"

const CurrentPodCast = () => {
  const { collectionId } = useParams()
  const dispatch = useDispatch()
  const getSinglePodcasts = useSelector((state) => state.getSinglePodcasts)
  const { loading, error, podcast } = getSinglePodcasts

  useEffect(() => {
    dispatch(podcastsActions.getSinglePodcasts(collectionId))
  }, [collectionId, dispatch])

  if (loading) {
    return <Loader />
  }

  const podcastList = podcast.slice(0, 50)
  const podcastDetails = podcast[0]

  return (
    <section className="pod-bg">
      <NavBar />
      <div className="section-content-default pod-content">
        <div className="section-wrapper-default">
          {(podcast.length === 0 && !loading) || error ? (
            <h5>
              No episodes available - Please check your internet connection
            </h5>
          ) : (
            <div>
              <CurrentPodcastHeader podcastDetails={podcastDetails} />
              <CurrentPodcastDetails podcastList={podcastList} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default CurrentPodCast
