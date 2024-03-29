import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ubaAd from '../../../assets/images/uba-ad.jpg';
import journalAd from '../../../assets/images/journal-ad.png';
import { useViewPort } from '../../hooks/Viewport';
import './teaser.css';
import TeaserLatestCard from './TeaserLatestCard';
import TeaserPolitics from './TeaserPolitics';
import { useSelector } from 'react-redux';

const TeaserSection = ({ data }) => {
  const getWordpress = useSelector((state) => state.getWordpress);
  const { loading, wordpressNews } = getWordpress;

  const politics = data.filter(
    (post) => post.category_id.toLowerCase() === 'politics and government'
  );
  const discoverAfrica = data.filter(
    (post) => post.category_id.toLowerCase() === 'discover africa'
  );

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    subCategoryPost();
    //eslint-disable-next-line
  }, []);

  const subCategoryPost = () => {
    let post = [];
    let count = [];

    for (let i = 0; i < discoverAfrica.length; i++) {
      let element = discoverAfrica[i];
      if (!post.includes(element.sub_category)) {
        post.push(element.sub_category);
        count.push(i);
      }
    }
    let newArr = discoverAfrica.filter((item, index) => count.includes(index));
    setSelected(newArr);
  };

  const { width } = useViewPort();
  const breakpoint = 991;

  return (
    <section className='discover section-content-default '>
      <div className='section-wrapper-default'>
        <div className='content-grid'>
          <div className='africa-now'>
            <div className='policy'>
              <div className='policy-container'>
                <h5 className='policy-heading section-heading-default'>
                  Politics and Government
                </h5>
                <div className='policy-content'>
                  {politics.slice(0, 3).map((eachCard) => (
                    <Link
                      to={`/post/${eachCard.id}`}
                      className='policy-government-link'
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
                  className='explore-red-btn'
                >
                  Explore More...
                </Link>
              </div>
            </div>
          </div>
          {width > breakpoint ? (
            <div className='latest-daily'>
              <div className='latest-daily-wrapper'>
                <div className='l-img-container'>
                  <img src={ubaAd} alt='tesla' className='l-img' />
                </div>
                <div className='latest-content'>
                  {!loading && wordpressNews.length === 0 ? (
                    // <h5>No news Available</h5>
                    <h5></h5>
                  ) : (
                    wordpressNews.slice(0, 4).map((eachCard) => (
                      <Link
                        to={`/latest/${eachCard.post_title}`}
                        className='lastest-card-link'
                        key={eachCard.ID}
                      >
                        <TeaserLatestCard eachCard={eachCard} />
                      </Link>
                    ))
                  )}
                </div>

                <div className='l-img-container'>
                  <img src={journalAd} alt='tesla' className='l-img' />
                </div>
              </div>
            </div>
          ) : (
            <div className='latest-daily'>
              <div className='latest-daily-wrapper'>
                <div className='l-img-container'>
                  <img src={ubaAd} alt='tesla' className='l-img' />
                </div>
                <div className='l-img-container'>
                  <img src={journalAd} alt='tesla' className='l-img' />
                </div>
                <div className='latest-content'>
                  {!loading && wordpressNews.length === 0 ? (
                    // <h5>No news Available</h5>
                    <h5></h5>
                  ) : (
                    wordpressNews.slice(0, 4).map((eachCard) => (
                      <Link
                        to={`/latest/${eachCard.post_title}`}
                        className='lastest-card-link'
                        key={eachCard.ID}
                      >
                        <TeaserLatestCard eachCard={eachCard} />
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;
