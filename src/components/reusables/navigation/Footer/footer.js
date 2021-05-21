import React from "react";
import { Card } from "react-bootstrap";
import GooglePlayImg from "../../../../assets/images/playstoreimg.png";
import ApplePlayImg from "../../../../assets/images/apple.jpg";
import { pageurl } from '../../../../utils/constants'
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper container-fluid">
      <footer className="footer">
        <div className="row ft-mob">
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <h3 className="ft-hd-1">About</h3>
            <ul>
              <li>
                <a href={pageurl.CONTACTUS}>Contact Us</a>
              </li>
              <li>
                <a href="/">Terms and conditions</a>
              </li>
              <li>
                <a href="/">Cookies Policy</a>
              </li>
              <li>
                <a href="/">Code of Ethics Finder</a>
              </li>
              <li>
                <a href="/">Membership</a>
              </li>
              <li>
                <a href="/">Advertise with us</a>
              </li>
            </ul>

          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="ft-hd-2">Connect</h3>
            <ul>
              <li>
                <a href={pageurl.CONTACTUS}>Contact Us</a>
              </li>
              <li>
                <a href="/">Submit an article</a>
              </li>
              <li>
                <a href="/">Newsletter</a>
              </li>
              <li>
                <a href="/">Mobile App</a>
              </li>
              <li>
                <a href="/">Site Map</a>
              </li>
              <li>
                <a href="/">Work with us</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 ft-crd">
            <h3 className="ft-hd-3">company</h3>
            <ul>
              <li>
                <a href="/">Live Radio Us</a>
              </li>
              <li>
                <a href="/">Podcast</a>
              </li>
              <li>
                <a href="/">Discover Africa</a>
              </li>
              <li>
                <a href="/">Tech Africa</a>
              </li>
              <li>
                <a href="/">Eco Africa</a>
              </li>
              <li>
                <a href="/">Sport Africa</a>
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
              <a href="/playStore">
                <img loading="lazy" src={GooglePlayImg} alt="google play" />{" "}
              </a>
              <a href="/applestore">
                <img loading="lazy" src={ApplePlayImg} alt="google play" />{" "}
              </a>
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
