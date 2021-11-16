import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header/index";
import Footer from "../reusables/navigation/Footer/footer";
// feeds api
import { getNewsFeed } from "../../context/news/NewsApi";
// import queryString from "query-string";

import CategoryCard from "./CategoryCard";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
import "./newscategory.css";
import UnableToFetchNews from "../reusables/errorMessages/UnableToFetchNews";
import { ContactsAds1 } from "../ContactUs/mainSection/ContactsAds";
import CategoryNavbar from "./Header/CategoryNavbar";
import { PopulateReadersList } from "../homepage/politics/ReaderList";

const SubcategoryNews = () => {
  const [loading, setLoading] = useState(true);
  const [newsCateg, setNewsCateg] = useState(null);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [numberOfCategCard, setNumberOfCategCard] = useState(10);
  const history = useHistory();

  const { search } = useLocation();
  const x = new URLSearchParams(search);
  const subcategory = x.get("subcategory");

  useEffect(() => {
    // check if the url changes
    const unlisten = history.listen(() => {
      // referesh page if it changes
      window.location.reload();
    });
    return () => {
      unlisten();
    };
  }, []);

  useEffect(() => {
    let sub = true;
    if (sub) {
      try {
        getNewsFeed().then((data) => {
          const discoveryAfrica = data?.filter(
            (d) => d.category_id === "Discover Africa"
          );

          const getCategories = discoveryAfrica?.filter(
            (category) => category.sub_category === subcategory
          );

          setNewsCateg(getCategories);
          setLoading(false);
          setNews(data);
        });
      } catch (error) {
        if (error) {
          setError(error.message);
        }
      }
    }
    return () => (sub = null);
    // eslint-disable-next-line
  }, [subcategory]);

  if (error) {
    // return <Link to="/error404" />;
    return history.pushState("/error404");
  }

  if (loading || news?.length < 1) {
    return <Loader />;
  }

  return (
    <Fragment>
      {/* <TopNav /> */}
      {/* <Navbar /> */}

      <CategoryNavbar />

      <Header post_type={newsCateg && newsCateg[0]?.sub_category} />
      {/* {<h1 className="text-center text-title">{newsCateg && newsCateg[0].category_id}</h1>} */}
      {/* <h1 className="text-center text-title">Welcome Here</h1> */}
      {newsCateg && newsCateg ? (
        <div className="discover-cont">
          <section className="discover">
            <div className="left-pane">
              {newsCateg &&
                newsCateg.length > 0 &&
                newsCateg.slice(0, numberOfCategCard).map((aNews) => {
                  const {
                    post_title,
                    featured_image,
                    id,
                    post_type,
                    slug,
                    category_id,
                    post_description,
                  } = aNews;
                  return (
                    <CategoryCard
                      key={id}
                      post_title={post_title}
                      featured_image={featured_image}
                      slug={slug}
                      category_id={category_id}
                      post_type={post_type}
                      post_description={post_description}
                      className="card-unit"
                    />
                  );
                })}
              {newsCateg?.length > numberOfCategCard && (
                <button
                  className="premium-tag load-more-btn ml-3 ml-md-3 ml-lg-3 mb-5 mb-md-5 mb-lg-0"
                  onClick={() => setNumberOfCategCard(numberOfCategCard + 3)}
                >
                  Load More...
                </button>
              )}
            </div>
            <div className="right-pane">
              {/* <ReaderList data={news}/>
              {news && news.length &&
                  news.slice(0, 4).map(({ slug, post_title, id, created_at, post_description}) => {
                    return <ReaderList 
                            key={id} 
                            slug={slug} 
                            post_title={post_title}
                            post_description={post_description}
                            created_at={created_at}
                          />;
                  })} */}
              <PopulateReadersList news={news} start={0} end={2} />
              {/* <h4 className="trend">TRENDS</h4> */}
              <ul>
                {/* {news && news.length > 0 && news.slice(0, 5).map((news, index) => (
                  <li className="trend_list" key={index}>
                    <Link to={`/post/${news.slug}`}>{news.slug}</Link>
                  </li>
                ))} */}
                <li>
                  <ContactsAds1 />
                </li>
                <li>
                  <ContactsAds1 />
                </li>
                {/* <li><ContactsAds1 /></li> */}
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <UnableToFetchNews />
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default SubcategoryNews;
