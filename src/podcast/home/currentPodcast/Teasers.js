import React from 'react';
import bigImage from "./../../../assets/images/burna-podcast.png";


export const Teasers = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
