import React, { useState, useEffect, Fragment } from "react";
import TopNav from "../reusables/Topnav";
import Header from "./Header/index";
import Footer from "../reusables/navigation/Footer/Footer";
// feeds api
import { getNewsFeed } from "../../context/news/NewsApi";
// import queryString from "query-string";

import CategoryCard from "./CategoryCard";
import { getCategories } from "../../context/news/NewsApi";
import { Link, useHistory, useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
import "./newscategory.css";
import { Button, Card } from "react-bootstrap";
import UnableToFetchNews from "../reusables/errorMessages/UnableToFetchNews";
import {ContactsAds1} from "../ContactUs/mainSection/ContactsAds";
import Navbar from "../reusables/navigation/Nav/Nav";
import CategoryNavbar from "./Header/CategoryNavbar";
import ReaderList from "../homepage/politics/ReaderList";

const CategoryNews = () => {
  const [loading, setLoading] = useState(true);
  const [newsCateg, setNewsCateg] = useState(null);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [numberOfCategCard, setNumberOfCategCard] = useState(10);
  const history = useHistory()

  // method1
  const { search } = useLocation();
  const x = new URLSearchParams(search);
  const category = x.get("category");
  // console.log(search);

  // method2
  // const x = new URLSearchParams(search);
  // const category = x.get('category')
  // const { search } = useLocation();
  // const { category } = queryString.parse(search);

  useEffect(() => {
    let sub = true;
    if (sub) {
      try {
        getCategories(`${category}`)
          .then((res) => {
            // console.log(res);
            setNewsCateg(res);
          })
          .then(() => {
            setLoading(false);
          });
        getNewsFeed().then((data) => {
          setNews(data);
          // console.log(news)
        });
      } catch (error) {
        if (error) {
          setError(error.message);
          console.log(error);
        }
      }
    }
    return () => (sub = null);
    // eslint-disable-next-line
  }, [category]);
  
  if (error) {
    // return <Link to="/error404" />;
    return history.pushState('/error404')
  }

  if (loading || news.length < 1) {
    return <Loader />;
  }

  return (
    <Fragment>
      {/* <TopNav /> */}
      {/* <Navbar /> */}

      <CategoryNavbar />

      <Header post_type={newsCateg && newsCateg[0]?.category_id}/>
      {/* {<h1 className="text-center text-title">{newsCateg && newsCateg[0].category_id}</h1>} */}
      {/* <h1 className="text-center text-title">Welcome Here</h1> */}
      {
        newsCateg && newsCateg ?
        <div className="discover-cont">
          <section className="discover">
            <div className="left-pane">
              {newsCateg && newsCateg.length > 0 &&
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
                {
                  (newsCateg?.length > numberOfCategCard)  && (
                    <button 
                      className="premium-tag load-more-btn ml-3 ml-md-3 ml-lg-3 mb-5 mb-md-5 mb-lg-0"
                      onClick={()=>setNumberOfCategCard(numberOfCategCard+3)}>Load More...</button>
                  )
                }
            </div>
            <div className="right-pane">
              {/* <ReaderList data={news}/> */}
              {news && news.length &&
                  news.slice(0, 4).map(({ slug, post_title, id, created_at, post_description}) => {
                    return <ReaderList 
                            key={id} 
                            slug={slug} 
                            post_title={post_title}
                            post_description={post_description}
                            created_at={created_at}
                          />;
                  })}
              {/* <h4 className="trend">TRENDS</h4> */}
              <ul>
                {/* {news && news.length > 0 && news.slice(0, 5).map((news, index) => (
                  <li className="trend_list" key={index}>
                    <Link to={`/post/${news.slug}`}>{news.slug}</Link>
                  </li>
                ))} */}
                <li><ContactsAds1 /></li>
                <li><ContactsAds1 /></li>
                <li><ContactsAds1 /></li>
              </ul>
            </div>
          </section>
        </div>
        :
        <div>
          <UnableToFetchNews />
        </div>
      }
      <Footer/>
    </Fragment>
  );
};

export default CategoryNews;
