import React from 'react'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import cybertruck from '../../../assets/images/cybertruck1.jpg'
import { useViewPort } from '../../../components/hooks/Viewport'
import './teaser.css'
import TeaserCard from './TeaserCard'
import TeaserPolitics from './TeaserPolitics'

const TeaserSection = ({ data }) => {
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
  const { width } = useViewPort()
  const breakpoint = 991

  // Select 1 news from each category
  const selectedTeasers = [culture[0], places[0], lifestyle[0], people[0]]

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
                    <div className="sub-categ-card" key={eachCard.id}>
                      <div className="a-img-container">
                        <img
                          src={`https://api.tv24africa.com/public/storage/post_image/${eachCard.featured_image}`}
                          alt={eachCard.sub_category}
                          className="f-img"
                        />
                      </div>
                      <Link
                        to={{
                          pathname: '/news/sub-categories',
                          search: `?subcategory=${eachCard.sub_category}`,
                        }}
                        className="dest"
                      >
                        {eachCard.sub_category}
                      </Link>
                      <Link
                        to={`/post/${eachCard.slug}`}
                        className="a-text africa-discover-link"
                      >
                        {eachCard.slug}
                      </Link>
                    </div>
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
                      key={eachCard.id}
                    >
                      <TeaserPolitics eachCard={eachCard} />
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
                    <Link
                      to={`/post/${eachCard.slug}`}
                      className="lastest-card-link"
                      key={eachCard.id}
                    >
                      <TeaserCard eachCard={eachCard} />
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
