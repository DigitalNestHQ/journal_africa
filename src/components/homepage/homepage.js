import React, { Fragment, useEffect, useState, useContext } from 'react'
import Nav from '../reusables/navigation/Nav/nav'
import Banner from './Banner'
import TeaserSection from './homepageTeaser/TeaserSection'
import PoliticsAndGovernance from './politics/PoliticsAndGovernance'
import Tech from './lifestyle/LifeStyle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../reusables/navigation/Footer/footer'
import './homepage.css'
import FactCheck from './development/FactCheck'
import Economy from './economy/EconomyComponent'
import Business from './business/Business'
import { SignupTeaser } from '../reusables/news/SignupTeaser'
import LatestNews from './latestnews/LatestNews'
import Loader from '../loader/Loader'
import HomepagePodcast from './homepage-podcast/HomepagePodcast'
import newsContext from '../../context/news/NewsContext'

function Homepage() {
  const context = useContext(newsContext)
  const { news, loading, getNews } = context
  const [sportCount, setSportCount] = useState(0)
  const [economyCount, setEconomyCount] = useState(0)

  useEffect(() => {
    AOS.init()
    getNews()
    const random = () => {
      const sportNum = Math.floor(Math.random() * 3)
      const economyNum = Math.floor(Math.random() * 5)
      setEconomyCount(economyNum)
      setSportCount(sportNum)
    }
    random()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loader />
  }

  const sorted = news.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1))

  return (
    <Fragment>
      <Nav />
      <Banner
        data={sorted}
        sportCount={sportCount}
        economyCount={economyCount}
      />
      <LatestNews data={sorted} />
      <TeaserSection data={sorted} sportCount={sportCount} />
      <Business data={sorted} />
      <FactCheck data={sorted} />
      <Economy data={sorted} />
      <PoliticsAndGovernance data={sorted} />
      <Tech data={sorted} />
      <HomepagePodcast data={sorted} />
      <SignupTeaser />
      <Footer />
    </Fragment>
  )
}

export default Homepage
