import React from "react";
import { pageurl } from "./utils/constants.js";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage/Homepage";
import AboutUs from "./components/about/AboutComponent";
import Category from "./components/newscategory/Categories";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import CookiePolicy from "./components/cookie/CookiePolicy";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Sports from "./components/sport/Sport";
import Subscribe from "./components/subscription/Subscribe";
import DiscoverAfrica from "./components/DiscoverAfrica/index";
import ContactUs from "./components/ContactUs/index";
import NewsFeeds from "./components/generalNews/News";
import AllNewsFeeds from "./components/homepage/AllNews";
import { CodeOfEthics } from "./components/ethicscode/CodeOfEthics";
import CategoryNews from "./components/category/CategoryNews";
import { PodcastHome } from "./podcast/home/PodcastHome.js";
import { PodCastsView } from "./podcast/podcastspage/PodCastsView.js";

import Error404 from "./components/error404/Error404";

// import { NewHomePage } from "./components/newDesign/NewHomePage"

// css override
import "./../src/components/reusables/utilities/index.css";

// states
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

// middleware
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import Categories from "./components/newscategory/Categories";
import { SinglePodCast } from "./podcast/singlepodcast/SinglePodCast.js";
import { SuccessPage } from "./components/homepage/homepageSubscribeSection/SuccessPage.js";
import Faq from "./components/faq/Faq.js";
import { Advertising } from "./components/advertising/Advertising.js";
import SubcategoryNews from "./components/category/SubcategoryNews.js";
import { WriteForUs } from "./components/writeforus/WriteForUs.js";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <div className="App">
      <AuthState>
        <AlertState>
          <Switch>
            {/* <Route exact path="/news/home" component={NewHomePage} /> */}
            <Route exact path={pageurl.HOMEPAGE} component={HomePage} />
            <Route exact path={pageurl.SUBSCRIBE} component={Subscribe} />
            <Route exact path={pageurl.FAQ} component={Faq} />
            <Route exact path={pageurl.ADVERTISING} component={Advertising} />
            <Route
              exact
              path={pageurl.SIGNUPSUCCESSFUL}
              component={SuccessPage}
            />
            <Route exact path={pageurl.CATEGORY} component={Category} />
            <Route exact path={pageurl.ABOUT} component={AboutUs} />
            <Route exact path={pageurl.SPORT} component={Sports} />
            <Route exact path={pageurl.CODEOFETHICS} component={CodeOfEthics} />
            <Route exact path={pageurl.WRITEFORUS} component={WriteForUs} />
            <Route exact path="/post/:slug" component={NewsFeeds} />
            <Route path="/allnews" component={AllNewsFeeds} />
            <Route exact path="/news/categories" component={CategoryNews} />
            <Route
              exact
              path="/news/sub-categories"
              component={SubcategoryNews}
            />
            <Route exact path="/news/1" component={Categories} />
            <Route exact path={pageurl.PODCAST} component={PodcastHome} />
            <Route exact path="/podcast/all" component={PodCastsView} />
            <Route exact path="/podcast/single" component={SinglePodCast} />
            <Route
              exact
              path={pageurl.PRIVACYPOLICY}
              component={PrivacyPolicy}
            />
            <Route exact path={pageurl.COOKIEPOLICY} component={CookiePolicy} />
            <Route path="/login" component={Login} />
            <Route
              exact
              path={pageurl.DISCOVERAFRICA}
              component={DiscoverAfrica}
            />
            <Route exact path={pageurl.CONTACTUS} component={ContactUs} />
            <Route exact path={pageurl.SIGNUP} component={Signup} />
            <Route component={Error404} />
          </Switch>
        </AlertState>
      </AuthState>
    </div>
  );
}

export default App;
