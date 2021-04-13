import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../reusables/navigation/Nav/Nav";
import Banner from "./Banner";
import TeaserSection from "./homepageTeaser/TeaserSection";
import PoliticsAndGovernance from "./politics/PoliticsAndGovernance";
import Entertainment from "./entertainment/Entertainment";
import { getNewsFeed } from "../../context/news/NewsApi";
import Tech from "./lifestyle/LifeStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../reusables/navigation/Footer/Footer";
import "./homepage.css";
import Development from "./development/Development";
import EconomyComponent from "./economy/EconomyComponent";
import ViewPoint from "./viewpoint/ViewPoint";
import Business from "./business/Business";
import { SignupTeaser } from "../reusables/news/SignupTeaser";
import LatestNews from "./latestnews/LatestNews";
import Loader from "../loader/Loader";

function Homepage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  // your useeffct function will cause memory  leaks
  useEffect(() => {
    AOS.init();
    let subscribe = true;
    if (subscribe) {
      getNewsFeed()
        .then((data) => {
          setNews(data);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      return () => (subscribe = null);
    }

    //eslint-disable-next-line
  }, [slug, setNews]);
  // console.log(news.forEach((n)=>console.log(n.category_id)))
  if(news){
   return <Loader />
  }
    return (
    <Fragment>
      <Nav />
        <Banner data={news} />
        <LatestNews data={news} />
        <TeaserSection data={news} />
        <PoliticsAndGovernance data={news}/>
        <Business data={news}/>
        <Development data={news}/>
        <EconomyComponent data={news}/>
        <Tech data={news}/>
        <ViewPoint data={news}/>
        <Entertainment data={news}/>
        <SignupTeaser />
        {/* <SubscribeForm /> */}
      <Footer />
    </Fragment>
  );
}

export default Homepage;
