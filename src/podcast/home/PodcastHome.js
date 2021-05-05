import React from "react";
import { PodNavBar } from "./podnavbar/PodNavBar";
import bigImage from "./../../assets/images/burna-podcast.png"

export const PodcastHome = () => {
  return (
    <div className="podcast_container">
      <PodNavBar />
      <section className="pod_top_section">
        <p className="ongoing_podcast_signal"><i className="fas fa-dot-circle live_dot_signal"></i> Live</p>
        <p className="ongoing_podcast_caption">An ongoing interview session with NDDC Chairman <button class="watch_btn">watch</button></p>
      </section>
      {/*  */}
      <div style={{height: '100%'}}>

      <section className="pod_big_frame">
        <div className="pod_play_board">
          <secton className="current_pod_screen">
            <div style={{height:"100%", width:"100%"}}>
            <img src={bigImage} className="pod_image"></img>
            <section className="current_pod_caption">
              <p className="current_podcast_signal"><i className="fas fa-dot-circle live_dot_signal"></i> Live</p>
              <p className="current_podcast_caption">An ongoing interview session with NDDC Chairman</p>
            </section>
            </div>
          </secton>
          {/*  */}
          <section className="small_pod_screen">
            <section className="pod_card_wrapper">
              <div className="pod_card_image">
                <img src={bigImage} className="pod_image"/>
              </div>
              <div className="pod_caption">
                <p>Some text about the podcast intervewing the nccs manager</p>
              </div>
            </section>
            <section className="pod_card_wrapper">
              <div className="pod_card_image">
                <img src={bigImage} className="pod_image"/>
              </div>
              <div className="pod_caption">
                <p>Some text about the podcast intervewing the nccs manager</p>
              </div>
            </section>
            <section className="pod_card_wrapper">
              <div className="pod_card_image">
                <img src={bigImage} className="pod_image"/>
              </div>
              <div className="pod_caption">
                <p>Some text about the podcast intervewing the nccs manager</p>
              </div>
            </section>
          </section>
        </div>
      </section>
      </div>

    </div>
  );
};
