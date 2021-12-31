import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../../components/reusables/navigation/Nav/nav'
import Footer from '../../../components/reusables/navigation/Footer/footer'
import './currentpodcast-style.css'

const CurrentPodCast = () => {
  const { collectionId } = useParams()

  return (
    <section className="pod-bg">
      <NavBar />
      <div className="section-content-default pod-content">
        <div className="section-wrapper-default">
          <p>Hello World</p>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default CurrentPodCast
