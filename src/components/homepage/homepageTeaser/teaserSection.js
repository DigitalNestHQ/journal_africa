import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import cybertruck from '../../../assets/images/cybertruck1.jpg'
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'
import { useViewPort } from '../../../components/hooks/Viewport'
import './teaser.css'

const TeaserSection = ({ data }) => {
  const { width } = useViewPort()
  const breakpoint = 991
  // get all the category to be displayed
  const politics = data.filter((post) => post.category_id === 'Politics')
  const discoverAfrica = data.filter(
    (post) => post.category_id === 'Discover Africa',
  )

  const culture = discoverAfrica.filter(
    (post) => post.sub_category === 'Culture',
  )

  const places = discoverAfrica.filter((post) => post.sub_category === 'Places')
  const lifestyle = discoverAfrica.filter(
    (post) => post.sub_category === 'Lifestyle',
  )

  const people = discoverAfrica.filter((post) => post.sub_category === 'People')

  // Select 1 news from each category
  const selectedTeasers = [culture[0], places[0], lifestyle[0], people[0]]

  AOS.init()

  if (selectedTeasers.length === 0) {
    return null
  }

  return (
    <section className="discover">
      <div className="discover-wrapper">
        <div className="content-grid">
          <div className="africa-now">
            <div className="discover-africa-content">
              <div className="africa">
                <h5 className="africa-header">Discover Africa</h5>
                <div className="africa-cards">
                  {selectedTeasers.map((eachCard) => (
                    <Link
                      to={`/post/${eachCard.slug}`}
                      className="africa-discover-link"
                      key={eachCard.id}
                    >
                      <div className="sub-categ-card">
                        <div className="a-img-container">
                          <img
                            src={`https://api.tv24africa.com/public/storage/post_image/${eachCard.featured_image}`}
                            alt={eachCard.sub_category}
                            className="f-img"
                          />
                        </div>
                        <p className="dest">{eachCard.sub_category}</p>
                        <p className="a-text">{eachCard.slug}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: `?category=Discovery Africa`,
                  }}
                  className="more-africa"
                >
                  Explore More...
                </Link>
              </div>
            </div>
            <div className="policy">
              <div className="policy-container">
                <h5 className="policy-heading">Politics and Government</h5>
                <div className="policy-content">
                  {politics.slice(0, 3).map((eachCard) => (
                    <Link
                      to={`/post/${eachCard.slug}`}
                      className="policy-government-link"
                    >
                      <div className="policy-card" key={eachCard.id}>
                        <div className="p-img-container">
                          <img
                            src={`https://api.tv24africa.com/public/storage/post_image/${eachCard.featured_image}`}
                            alt={eachCard.sub_category}
                            className="p-img"
                          />
                        </div>
                        <div className="left-content">
                          <h6 className="left-heading">{eachCard.slug}</h6>
                          {ReactHtmlParser(
                            `${eachCard.post_description.substring(0, 100)}...`,
                            HtmlParseOptions,
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: `?category=Politics`,
                  }}
                  className="p-explore"
                >
                  Explore More...
                </Link>
              </div>
            </div>
          </div>
          {width > breakpoint ? (
            <div className="latest-daily">
              <div className="latest-daily-wrapper">
                <h5 className="latest-heading">Latest Daily News</h5>
                <div className="l-img-container">
                  <img src={cybertruck} alt="tesla" className="l-img" />
                </div>
                <div className="latest-content">
                  {data.slice(13, 17).map((eachCard) => (
                    <Link to={`/post/${eachCard.slug}`} className="lastest-card-link">
                      <div className="latest-card" key={eachCard.id}>
                        <p className="latest-date">
                          <Moment format="MMMM Do YYYY">
                            {eachCard.updated_at}
                          </Moment>
                        </p>
                        <h6 className="latest-title">{eachCard.slug}</h6>
                        <p className="latest-text">
                          {ReactHtmlParser(
                            `${eachCard.post_description.substring(0, 100)}...`,
                            HtmlParseOptions,
                          )}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="l-img-container">
                  <img src={cybertruck} alt="tesla" className="l-img" />
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  )
}

export default TeaserSection
