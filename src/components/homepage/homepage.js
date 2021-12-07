import React, { Fragment, useEffect, useState, useContext } from 'react'
import Nav from '../reusables/navigation/Nav/nav'
import Banner from './Banner'
import TeaserSection from './homepageTeaser/TeaserSection'
import PoliticsAndGovernance from './politics/PoliticsAndGovernance'
import Entertainment from './entertainment/Entertainment'
import Tech from './lifestyle/LifeStyle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../reusables/navigation/Footer/footer'
import './homepage.css'
import FactCheck from './development/FactCheck'
import Economy from './economy/EconomyComponent'
import ViewPoint from './viewpoint/ViewPoint'
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

  // your useeffect function will cause memory  leaks
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

  return (
    <Fragment>
      <Nav />
      <Banner data={news} sportCount={sportCount} economyCount={economyCount} />
      <LatestNews data={news} />
      <TeaserSection data={news} sportCount={sportCount}/>
      <Business data={news} />
      <FactCheck data={news} />
      <Economy data={news} />
      <PoliticsAndGovernance data={news} />
      <Tech data={news} />
      <HomepagePodcast data={news} />
      {/* <ViewPoint data={news} />
      <Entertainment data={news} /> */}
      <SignupTeaser />
      <Footer />
    </Fragment>
  )
}

export default Homepage
