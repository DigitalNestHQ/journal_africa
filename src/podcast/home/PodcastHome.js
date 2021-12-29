import React, {Fragment} from "react";
// import { PodNavBar } from "./podnavbar/PodNavBar";
import { CurrentPodCast } from "./currentPodcast/CurrentPodCast";
import { Teasers } from "./currentPodcast/Teasers";
import { LivePodCastAlert } from "./livepodcastalert/LivePodCastAlert";
import '../../components/homepage/business/business.css'
import { Link } from 'react-router-dom'
import { HtmlParseOptions } from '../../_helper/parseNewsHtml';
import ReactHtmlParser from 'react-html-parser'
import { Row, Col, Card } from 'react-bootstrap'
import '../../components/homepage/politics/politicsandgovernance.css'
import "./podcasthome.css"
import NavBar from '../../components/reusables/navigation/Nav/nav'
import Footer from '../../components/reusables/navigation/Footer/footer'

//  THIS IS THE PODCAST PLAYING PAGE

export const PodcastHome = () => {
  return (
    <Fragment>
      <NavBar/>
      Hello
      <Footer/>
    </Fragment>
  );
};
