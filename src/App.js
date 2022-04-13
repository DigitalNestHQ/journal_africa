import React from "react";
import { pageurl } from "./utils/constants.js";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/Homepage";
import AboutUs from "./pages/about/AboutComponent";
import Account from "./pages/account";
import TermsAndConditions from "./pages/privacyPolicy/TermsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Login from "./pages/login/Login";
import Signup from "./pages/register/Signup";
import Subscribe from "./pages/subscription/Subscribe";
import ContactUs from "./pages/contact/index";
import NewsFeeds from "./pages/news/News";
import { CodeOfEthics } from "./pages/ethicscode/CodeOfEthics";
import CategoryNews from "./pages/category/CategoryNews";
import PodcastHome from "./podcast/home/PodcastHome.js";
import LatestDaily from "./pages/news/LatestDaily";
import Error404 from "./pages/error404/error404";
import CurrentPodCast from "./podcast/home/currentPodcast/CurrentPodCast";
import CurrentPodCastPlayer from "./podcast/home/livepodcastalert/CurrentPodCastPlayer";
import { SuccessPage } from "./components/homepage/homepageSubscribeSection/SuccessPage.js";
import Faq from "./pages/faq/Faq.js";
import { Advertising } from "./pages/advertising/Advertising";
import SubcategoryNews from "./pages/category/SubcategoryNews";
import { WriteForUs } from "./pages/writeforus/WriteForUs";
import Copyright from "./pages/privacyPolicy/Copyright";

import SearchNews from "./components/generalNews/searchComponent/SearchNews";
import ScrollTopBotton from "./components/reusables/scrollButton/ScrollTopBotton";
import "./../src/components/reusables/utilities/index.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path={pageurl.HOMEPAGE} component={HomePage} />
        <Route exact path={pageurl.PRIVACYPOLICY} component={PrivacyPolicy} />
        <Route exact path="/copyright" component={Copyright} />
        <Route exact path={pageurl.SUBSCRIBE} component={Subscribe} />
        <Route exact path={pageurl.FAQ} component={Faq} />
        <Route exact path={pageurl.ADVERTISING} component={Advertising} />
        <Route exact path={pageurl.SIGNUPSUCCESSFUL} component={SuccessPage} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/account" component={Account} />
        <Route exact path={pageurl.CODEOFETHICS} component={CodeOfEthics} />
        <Route exact path={pageurl.WRITEFORUS} component={WriteForUs} />
        <Route exact path="/post/:slug" component={NewsFeeds} />
        <Route exact path="/latest/:slug" component={LatestDaily} />
        <Route exact path="/news/categories" component={CategoryNews} />
        <Route exact path="/search" component={SearchNews} />
        <Route exact path="/news/sub-categories" component={SubcategoryNews} />
        <Route exact path={pageurl.PODCAST} component={PodcastHome} />
        <Route
          exact
          path="/podcast/single/:collectionId"
          component={CurrentPodCastPlayer}
        />
        <Route exact path="/podcast/:collectionId" component={CurrentPodCast} />
        <Route
          exact
          path={pageurl.TERMSANDCONDITIONS}
          component={TermsAndConditions}
        />
        <Route path="/login" component={Login} />
        <Route exact path={pageurl.CONTACTUS} component={ContactUs} />
        <Route exact path={pageurl.SIGNUP} component={Signup} />
        <Route component={Error404} />
      </Switch>
      <ScrollTopBotton />
    </div>
  );
};

export default App;
