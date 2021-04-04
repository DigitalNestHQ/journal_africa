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
            <p>
              TV24 Africa Newspaper is Africa’s top online publication
              delivering breaking news and in-depth analysis in business,
              politics, entertainment, sports, lifestyle and many more.
            </p>
            <Card.Link href="#">
              <i className="fab fa-facebook"></i>
            </Card.Link>
            <Card.Link href="#">
              <i className="fab fa-twitter"></i>
            </Card.Link>
            <Card.Link href="#">
              <i className="fab fa-instagram"></i>
            </Card.Link>
            <Card.Link href="#">
              <i className="fab fa-youtube"></i>
            </Card.Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="ft-hd-2">categories</h3>
            <ul>
              <li>
                <a href={pageurl.CONTACTUS}>Contact Us</a>
              </li>
              <li>
                <a href="/">Apps</a>
              </li>
              <li>
                <a href="/">Newsletters</a>
              </li>
              <li>
                <a href="/">Channel Finder</a>
              </li>
              <li>
                <a href="/">TV Schedule</a>
              </li>
              <li>
                <a href="/">Podcasts</a>
              </li>
              <li>
                <a href="/contact">Submit a Tip</a>
              </li>
              <li>
                <a href="/works">Our Channels</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 ft-crd">
            <h3 className="ft-hd-3">company</h3>
            <ul>
              <li>
                <a href={pageurl.ABOUT}>About Us</a>
              </li>
              <li>
                <a href="/">Code of Ethics</a>
              </li>
              <li>
                <a href={pageurl.PRIVACYPOLICY}>Terms and Conditions</a>
              </li>
              <li>
                <a href={pageurl.PRIVACYPOLICY}>Privacy Policy</a>
              </li>
              <li>
                <a href={pageurl.COOKIEPOLICY}>Cookie Policy</a>
              </li>
              <li>
                <a href="/">Cookie Preferences</a>
              </li>
              <li>
                <a href="/contact">Community Guidelines</a>
              </li>
              <li>
                <a href={pageurl.CONTACTUS}>Work for us</a>
              </li>
              <li>
                <a href="/hr">HR quality</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4 app-cont">
            <h3 className="ps_p">DOWNLOAD APP</h3>
            <div className="app-store">
              <a href="/playStore">
                <img src={GooglePlayImg} alt="google play" />{" "}
              </a>
              <a href="/applestore">
                <img src={ApplePlayImg} alt="google play" />{" "}
              </a>
            </div>
            <small className="copyRight_text">&copy;2021 TV24 Media Network</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
