import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import NavBar from "../../../components/reusables/navigation/Nav/Nav"
import Footer from "../../../components/reusables/navigation/Footer/Footer"
import Loader from "../../../components/loader/Loader"
import { BASE_URL } from "../../../utils/constants"
import CurrentPodcastDetails from "./CurrentPodcastDetails"
import CurrentPodcastHeader from "./CurrentPodcastHeader"
import "./currentpodcast-style.css"

const CurrentPodCast = () => {
  const { collectionId } = useParams()
  const [podcast, setPodcast] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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
    // gettPodcast()
  }, [collectionId])

  if (podcast === null || loading) {
    return <Loader />
  }

  const podcastList = podcast.slice(0, 50)
  const podcastDetails = podcast[0]

  return (
    <section className="pod-bg">
      <NavBar />
      <div className="section-content-default pod-content">
        <div className="section-wrapper-default">
          {podcast.length === 0 && !loading ? (
            <h5>No episodes available</h5>
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

const getPodcast = async (collectionId) => {
  const response = await axios.get(
    `${BASE_URL}lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=400`
  )

  return response.data.results
}
