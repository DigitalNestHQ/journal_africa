import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../reusables/navigation/Nav/Nav";
import Banner from "./Banner";
import TeaserSection from "./homepageTeaser/TeaserSection";
import SubscribeForm from "./homepageSubscribeSection/Subscribe";
import Politics from "./politics/PoliticsComponent";
import Headlines from "./headlines/HeadlineComponent";
import Lifestyles from "./lifestyle/LlifestyleComponent";
import Entertainment from "./entertainment/EntertainmentComponent";
import { getNewsFeed } from "../../context/news/NewsApi";
import Business from "./businessFinance/Business";
import Tech from "./techafrica/TechAfrica";
import Sports from "./sports/SportComponent";
import InsideAfrica from "./dicoverafrica/DiscoverAfrica";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../reusables/navigation/Footer/Footer";
import "./homepage.css";
import EcoAfricaComponent from "./ecoAfrica/EcoAfricaComponent";

function Homepage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  // console.log(news);
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

  return (
    <Fragment>
      <Nav />
      {/* <Banner data={news} /> */}
      {/* <Politics data={news} /> */}
      {/* discover africa  */}
      {/* <InsideAfrica /> */}
      {/* eco africa */}
      {/* <EcoAfricaComponent data={news} /> */}
      {/* tech africa */}
      {/* <Tech data={news}/> */}
      {/* sport */}
      {/* <Sports data={news}/> */}
      {/* <TeaserSection data={news} />
      <Headlines data={news}/>
      <Business data={news} />
      <Lifestyles data={news}/>
      <Entertainment data={news}/>
      <SubscribeForm /> */}
      
      <Banner data={news} />
      <Politics data={news} />
      <TeaserSection data={news} />
      <Headlines data={news}/>
      <Business data={news} />
      <InsideAfrica />
      <Tech data={news}/>
      <Sports data={news}/>
      <Lifestyles data={news}/>
      <Entertainment data={news}/>
      <SubscribeForm />
      <Footer />
    </Fragment>
  );
}

export default Homepage;
