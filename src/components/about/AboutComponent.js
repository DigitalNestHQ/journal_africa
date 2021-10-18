import React, { Fragment, useEffect, useState } from 'react';
import Nav from '../reusables/navigation/Nav/nav';
import { Card, Button } from 'react-bootstrap';
import Image3 from '../../assets/images/calabar-carnival-3.jpg';
import Image4 from '../../assets/images/travel1.jpg';

// import Trump from "../../assets/images/trump1.jpg";
// import logo from "../../assets/images/TV24E.png";
// import { Link } from "react-router-dom";
import Footer from '../reusables/navigation/Footer/footer';
import './about.css';
import { getNewsFeed } from '../../context/news/NewsApi';
import { Link } from 'react-router-dom';

const AboutComponent = (props) => {
  const [news, setNews] = useState(null);
  const [bigFrame, setBigFrame] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNewsFeed()
      .then((data) => {
        setNews(data);
        setBigFrame(data[1]);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <Fragment>
      <Nav />
      <div className="about">
        <div className="bg-header">
          <p className="about-txt">ABOUT TV24 AFRICA NEWSPAPER</p>
        </div>
        <div className="container abt-main">
          <div className="about-left">
            <div className="abt-txt">
              <p>
                TV24 Africa Newspaper was established in the year 2020 by News
                Media Africa Limited to give the African people the chance to
                tell their stories in ways never told. It is a multi-platform
                online news and analysis publication reaching everyone across
                the world via various digital media platforms.
              </p>
              <p>
                TV24Africa Newspaper aims to become the number one in Africa and
                one of the world’s most trusted source of informative and
                inspiring. It is poised to give Africans access to independent
                and well researched national, regional and international news in
                all spheres.
              </p>
              <p>
                {' '}
                The emphasis of its reporting will be more focused more on
                promoting development issues in the sub-region, especially those
                that are under reported, but capable of empowering the Africa
                people
              </p>
            </div>
            <div className="about-crds">
              <div className="row">
                {news &&
                  news
                    .slice(4, 6)
                    .map(
                      ({ category_id, featured_image, post_title, slug }) => {
                        return (
                          <div className="col-sm-6 s-card">
                            <Link to={`/post/${slug}`}>
                              <Card className="text-white mt-wrap h-100">
                                <Card.Img
                                  src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
                                  alt="Card image"
                                  className="h-100"
                                />
                                <Card.ImgOverlay className="m-t text-center ts-overlay">
                                  <Button
                                    variant="outline-danger"
                                    className="butn"
                                  >
                                    {category_id}
                                  </Button>
                                  <Card.Text className="ts-card-txt">
                                    {post_title}...
                                  </Card.Text>
                                </Card.ImgOverlay>
                              </Card>
                            </Link>
                          </div>
                        );
                      }
                    )}
              </div>
            </div>
          </div>
          <div className="about-right">
            <Link to={`/post/${bigFrame?.slug}`}>
              <Card className="text-white mt-wrap h-100">
                <Card.Img
                  src={`https://api.tv24africa.com/public/storage/post_image/${bigFrame?.featured_image}`}
                  alt="Card image"
                  className="h-100"
                />
                <Card.ImgOverlay className="m-t text-center ts-overlay">
                  <Card.Text className="ts-card-txt">
                    <button>TRENDS</button>
                    {bigFrame?.post_title}...
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
            {/* <img src={bigFrame?.featured_image}></img>
              <p>{bigFrame.featured_image}</p>
              <p classNAme="text-white">
                {bigFrame?.post_title}
              </p> */}
          </div>
        </div>
        <div className="txt-btm container pl-lg-5 abt-txt">
          <p>
            TV24 Africa Newspaper will dig deep into important issues capable of
            spurring real social change and reforms with no corporate, political
            or sectional agenda but through a fact based and unbiased reporting.
          </p>
          <p>
            Through our medium, we consider it our main responsibility to carry
            out an important work of informing and empowering Africans both at
            home and abroad, but also to equally support the present and future
            generations in achieving a voice in the world of modern media.
          </p>
          <p>
            TV24Africa Newspaper is available worldwide on all digital media
            platforms and mobile applications.
          </p>
        </div>
      </div>
      <div style={{ width: '34%' }}></div>
      <Footer />
    </Fragment>
  );
};

export default AboutComponent;
