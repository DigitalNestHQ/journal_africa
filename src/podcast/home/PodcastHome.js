import React, { useEffect, useState } from "react"
import PodcastCategories from "./podcategories/PodcastCategories"
import { useViewPort } from "../../components/hooks/Viewport"
import axios from "axios"
import "../../components/homepage/politics/politicsandgovernance.css"
import "./podcasthome.css"
import NavBar from "../../components/reusables/navigation/Nav/Nav"
import Footer from "../../components/reusables/navigation/Footer/Footer"
import { HOMESCREEN_API_URL } from "../../utils/constants"
import Loader from "../../components/loader/Loader"
import cybertruck from "../../assets/images/cybertruck1.jpg"

const PodcastHome = () => {
  const [podcasts, setPodcasts] = useState(null)
  const [loading, setLoading] = useState(false)
  const { width } = useViewPort()
  const breakpoint = 993
  useEffect(() => {
    const fetchPods = async () => {
      setLoading(true)
      getPodcasts()
        .then((data) => {
          setPodcasts(data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }
    fetchPods()
  }, [])

  let digitalPodcasts, radioPodcasts

  if (podcasts === null || loading) {
    return <Loader />
  }

  digitalPodcasts = podcasts.slice(0, 10)
  radioPodcasts = podcasts.slice(10, 20)

  return (
    <section className="pod-bg">
      <NavBar />
      <div className="section-content-default pod-content">
        <div className="section-wrapper-default">
          <div className="pod-content-grid">
            {podcasts.length === 0 && !loading ? (
              <h5>Podcast unavailable</h5>
            ) : (
              <div className="pod-categories">
                <PodcastCategories
                  header={"Digital Podcasts"}
                  podcasts={digitalPodcasts}
                />
                <PodcastCategories
                  header={"Radio & TV Podcasts"}
                  podcasts={radioPodcasts}
                />
              </div>
            )}
            {width > breakpoint ? (
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
                <div className="pod-home-ad-sense">
                  <img
                    src={cybertruck}
                    alt="ads"
                    className="pod-home-ad-sense-img"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default PodcastHome

const getPodcasts = async () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  }
  const response = await axios.get(HOMESCREEN_API_URL, headers)

  return response.data.results
}
