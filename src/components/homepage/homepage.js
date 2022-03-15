import React, { useEffect } from "react"
import Showcase from "./Showcase"
import TeaserSection from "./homepageTeaser/TeaserSection"
import PoliticsAndGovernance from "./politics/PoliticsAndGovernance"
import Tech from "./lifestyle/LifeStyle"
import "./homepage.css"
import FactCheck from "./development/FactCheck"
import Economy from "./economy/EconomyComponent"
import Business from "./business/Business"
import { SignupTeaser } from "../reusables/news/SignupTeaser"
import LatestNews from "./latestnews/LatestNews"
import Loader from "../loader/Loader"
import HomepagePodcast from "./homepage-podcast/HomepagePodcast"
import Layout from "../../components/layout/mainlayout/Layout"
import { useDispatch, useSelector } from "react-redux"
import * as newsActions from "../../store/actions/newsActions"

function Homepage() {
  const dispatch = useDispatch()
  const getNews = useSelector((state) => state.getNews)
  const { loading, news } = getNews
  const getWordpress = useSelector((state) => state.getWordpress)
  const { loading: wordpressLoading } = getWordpress

  useEffect(() => {
    dispatch(newsActions.getNews())
    dispatch(newsActions.getWordpressNews())
  }, [dispatch])

  if (loading || wordpressLoading) {
    return <Loader />
  } else if (!loading && news.length !== 0) {
    const sorted = news.sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
    return (
      <Layout>
        <main>
          <Showcase data={sorted} />
          <LatestNews data={sorted} />
          <TeaserSection data={sorted} />
          <Business data={sorted} />
          <FactCheck data={sorted} />
          <Economy data={sorted} />
          <PoliticsAndGovernance data={sorted} />
          <Tech data={sorted} />
          <HomepagePodcast data={sorted} />
          <SignupTeaser />
        </main>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <p style={{ textAlign: "center" }}>
          No news Found - Please check your internet connection or reload the
          page
        </p>
      </Layout>
    )
  }
}

export default Homepage
