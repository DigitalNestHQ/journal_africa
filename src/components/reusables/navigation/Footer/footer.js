import React from "react";
import { Card } from "react-bootstrap";
import GooglePlayImg from "../../../../assets/images/playstoreimg.png";
import ApplePlayImg from "../../../../assets/images/apple.jpg";
import { pageurl } from '../../../../utils/constants'
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-wrapper container-fluid">
      <footer className="footer">
        <div className="row ft-mob">
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <h3 className="ft-hd-1">About</h3>
            <ul>
              <li>
                <Link to={pageurl.ABOUT}>About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Terms and conditions</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookies Policy</Link>
              </li>
              <li>
                <Link to="/">Code of Ethics Finder</Link>
              </li>
              <li>
                <Link to="/">Membership</Link>
              </li>
              <li>
                <Link to="/">Advertise with us</Link>
              </li>
            </ul>

          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="ft-hd-2">Connect</h3>
            <ul>
              <li>
                <Link to={pageurl.CONTACTUS}>Contact Us</Link>
              </li>
              <li>
                <Link to="/">Submit an article</Link>
              </li>
              <li>
                <Link to="/">Newsletter</Link>
              </li>
              <li>
                <Link to="/">Mobile App</Link>
              </li>
              <li>
                <Link to="/">Site Map</Link>
              </li>
              <li>
                <Link to="/">Work with us</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 ft-crd">
            <h3 className="ft-hd-3">Section</h3>
            <ul>
              <li>
                <Link to="/podcast">Live Radio Us</Link>
              </li>
              <li>
                <Link to="/podcast">Podcast</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/news/categories",
                    search: `?category=Discovery Africa`,
                  }}
                >Discover Africa</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/news/categories",
                    search: `?category=Tech Africa`,
                  }}
                >Tech Africa</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/news/categories",
                    search: `?category=Economy`,
                  }}
                >Eco Africa</Link>
              </li>
              <li>
                <Link 
                  to={{
                    pathname: "/news/categories",
                    search: `?category=Sport Africa`,
                  }}
                >Sport Africa</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4 app-cont mt-1 mt-lg-5">
            <p className="pl-3 pl-lg-0">
              TV24 Africa Newspaper is Africa’s top online publication
              delivering breaking news and in-depth analysis in business,
              politics, entertainment, sports, lifestyle and many more.
            </p>
            <h3 className="ps_p">DOWNLOAD APP</h3>
            <div className="app-store">
              <Link to="/playStore">
                <img loading="lazy" src={GooglePlayImg} alt="google play" />{" "}
              </Link>
              <Link to="/applestore">
                <img loading="lazy" src={ApplePlayImg} alt="google play" />{" "}
              </Link>
            </div>
            <div className="social_media">
              <Card.Link target="_blank" href="https://www.facebook.com/tv24africanews">
                <i className="fab fa-facebook"></i>
              </Card.Link>
              <Card.Link target="_blank" href="https://twitter.com/tv24africanews">
                <i className="fab fa-twitter"></i>
              </Card.Link>
              <Card.Link target="_blank" href="https://www.instagram.com/tv24africanews/">
                <i className="fab fa-instagram"></i>
              </Card.Link>
              <Card.Link target="_blank" href="#">
                <i className="fab fa-youtube"></i>
              </Card.Link>
            </div>
          </div>
        </div>
            <small className="copyRight_text">&copy;2021 TV24 Media Network</small>
      </footer>
    </div>
  );
};

export default Footer;
