import React from "react";
import { Card } from "react-bootstrap";
import GooglePlayImg from "../../../../assets/images/playstoreimg.png";
import ApplePlayImg from "../../../../assets/images/apple.jpg";
import { pageurl } from "../../../../utils/constants";
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
                <a href={pageurl.ABOUT}>About Us</a>
              </li>
              <li>
                <a href="/privacy-policy">Terms and conditions</a>
              </li>
              <li>
                <a href={pageurl.CODEOFETHICS}>Code of Ethics</a>
              </li>
              <li>
                <a href={pageurl.COOKIEPOLICY}>Cookies Policy</a>
              </li>
              <li>
                <a href={pageurl.FAQ}>FAQs</a>
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
                <a href={pageurl.ADVERTISING}>Advertise</a>
              </li>
              <li>
                <Link to="/">Newsletter</Link>
              </li>
              <li>
                <Link to="/">Write for us</Link>
              </li>
              <li>
                <Link to="/">Site Map</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 ft-crd">
            <h3 className="ft-hd-3">Sections</h3>
            <ul>
              {/* <li>
                <Link to="/podcast">Live Radio Us</Link>
              </li> */}
              <li>
                <Link to="/podcast">Podcast</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/news/sub-categories",
                    search: `?subcategory=Places`,
                  }}
                >
                  Places
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/news/sub-categories",
                    search: `?subcategory=Lifestyle`,
                  }}
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/news/sub-categories",
                    search: `?subcategory=Culture`,
                  }}
                >
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/news/sub-categories",
                    search: `?subcategory=People`,
                  }}
                >
                  People
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4 app-cont">
            {/* <p className="pl-3 pl-lg-0">
              TV24 Africa Newspaper is Africa’s top Political, Economic,
              Development and Lifestyle online publication that tells the real
              Africa Story.
            </p> */}
            <h3 className="ft-hd-3">DOWNLOAD APP</h3>
            <div className="app-store">
              <Link to="/playStore" style={{ width: "160px" }}>
                <img loading="lazy" src={GooglePlayImg} alt="google play" />{" "}
              </Link>
              <Link
                to="/applestore"
                style={{ width: "160px" }}
                className="ml-lg-3"
              >
                <img loading="lazy" src={ApplePlayImg} alt="google play" />{" "}
              </Link>
            </div>
            {/* <h3 className="ft-hd-3">Follow us</h3> */}
            <div className="social_media">
              <Card.Link
                target="_blank"
                href="https://www.facebook.com/tv24africanews"
              >
                <i className="fab fa-facebook"></i>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://twitter.com/tv24africanews"
              >
                <i className="fab fa-twitter"></i>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://www.instagram.com/tv24africanews/"
              >
                <i className="fab fa-instagram"></i>
              </Card.Link>
              <Card.Link target="_blank" href="#">
                <i className="fab fa-youtube"></i>
              </Card.Link>
            </div>
          </div>
        </div>
        <small className="copyRight_text">
          &copy;2021 TV24 Africa Newspaper Limited,{" "}
          <a href="https://news.tv24africa.com" class="subs-link">
            a subsidiary of News Media Africa Limited
          </a>
        </small>
      </footer>
    </div>
  );
};

export default Footer;
