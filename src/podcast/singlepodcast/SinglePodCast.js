import React from "react";
import { PodCastAds } from "../podcastads/PodCastAds";
import { PodCastsPageNavBar } from "../podcastspage/reusables/PodCastsPageNavBar";
import "./singlepodcast.css";

export const SinglePodCast = () => {
  return (
    <React.Fragment>
      <div className="single_podcast">
        <PodCastsPageNavBar />
        <div className="single_podcast_title">
          <h1>The untold story of Donald Trump (podcast)</h1>
        </div>
        <div className="single_podcast_wrap row">
          <section className="col-12 col-lg-9 podcast_body">
            <div className="">
              <section className="published_date">
                <strong>May 04, 2021 - 10:34 PM Wat</strong>
              </section>
              <section className="full_podcast_caption">
                <div className="pod_share">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin"></i>
                  <i className="fas fa-envelope"></i>
                </div>
                <p>
                  We meet Dr. Timothy Sloan, a pastor of a black church in
                  Texas, who is torn over how to talk to his congregants about
                  the Covid-19 vaccines. He is skeptical about getting one, and
                  knows the rest of his church is, too. But, the vaccines could
                  also be a lifeline. Black Americans have died at about twice
                  the rate of white Americans from the virus. So while there may
                  be trust issues with the vaccines in communities of color,
                  they’re also the communities that need vaccines the most. Dr.
                  Sloan goes on a journey to find out who can help him learn
                  more about the vaccines, and how the medical establishment can
                  win back some of the trust it has lost over generations of
                  mistreatment. We meet Dr. Timothy Sloan, a pastor of a black
                  church in Texas, who is torn over how to talk to his
                  congregants about the Covid-19 vaccines. He is skeptical about
                  getting one, and knows the rest of his church is, too. But,
                  the vaccines could also be a lifeline. Black Americans have
                  died at about twice the rate of white Americans from the
                  virus. So while there may be trust issues with the vaccines in
                  communities of color, they’re also the communities that need
                  vaccines the most. Dr. Sloan goes on a journey to find out who
                  can help him learn more about the vaccines, and how the
                  medical establishment can win back some of the trust it has
                  lost over generations of mistreatment.
                </p>
              </section>
            </div>
          </section>
          <section className="col-12 col-lg-3 left-ads">
            <PodCastAds />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};
