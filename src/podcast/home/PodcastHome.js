import React from "react";
import { PodNavBar } from "./podnavbar/PodNavBar";
import { CurrentPodCast } from "./currentPodcast/CurrentPodCast";
import { Teasers } from "./currentPodcast/Teasers";
import { LivePodCastAlert } from "./livepodcastalert/LivePodCastAlert";
import "./podcasthome.css"

//  THIS IS THE PODCAST PLAYING PAGE

export const PodcastHome = () => {
  return (
    <section className="podcast">
      <div className="podcast_container">
        {/* NAVBAR */}
        <PodNavBar />
        {/* LIVE PODCAST INDICATOR */}
        <LivePodCastAlert />
        <section className="pod_big_frame">
          <div className="pod_play_board">
            {/*  CURRENT PLATING PODCAST  */}
              <CurrentPodCast />
              
            {/*  3 TEASERS BESIFE CURRENT PLATING PODCAST  */}
            <Teasers />
          </div>
        </section>
        </div>
    </section>
  );
};
