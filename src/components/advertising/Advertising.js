import React from "react";
import { Link } from "react-router-dom";
import { pageurl } from "../../utils/constants";
import Footer from "../reusables/navigation/Footer/Footer";
import Navbar from "../reusables/navigation/Nav/Nav";
import "./advertising.css";

export const Advertising = () => {
  return (
    <>
      <Navbar />
      <section className="advertising">
        <div className="advertising-heading">
          <h1>Advertising</h1>
        </div>
        <div className="advertising-information">
          <p>
            We are delighted to introduce our on the web medium to enable you
            reach a great number of your potential market.
          </p>

          <p>
            With our in-depth coverage of investigative stories and factual
            entertainment contents broadcasted on all our platforms with reach
            everywhere around the world, we offer you the unique advantage of
            maximum effect to your business.
          </p>
          <p>When you advertise with us, you stand to benefit the following:</p>
          <div>
            <ol>
              <li>
                You have immediate access to a national and global readership
                through a state-of-the-art medium, the World Wide Web.
              </li>
              <li>
                Relatively modest advert rates with the flexibility of choosing
                the duration desired.
              </li>
              <li>
                You have a choice of using still or animated advert
                designs/logos/icons, or acombination of the two.
              </li>
              <li>
                You have flexibility of design formats and sizes to suit your
                taste and special needs.
              </li>
            </ol>
          </div>
          <div className="submission-instruction">
            <h1>Submission of Materials</h1>

            <p>
              Banner ads can be in jpeg and gif format. All materials must be
              delivered via electronic medium. All ads must be delivered via
              electronic version, either on disk or e-mail in the ordered pixel
              dimensions unless otherwise noted.
            </p>
            <p>
              For more information,{" "}
              <Link to={pageurl.CONTACTUS}>contact us.</Link>
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
