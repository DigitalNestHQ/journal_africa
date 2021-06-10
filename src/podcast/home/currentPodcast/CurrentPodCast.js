import React from 'react';
import bigImage from "./../../../assets/images/burna-podcast.png";
import './currentpodcast-style.css';
import { Card } from "react-bootstrap";
import Audio from '../audioplayer/Audio';

export const CurrentPodCast = () => {
  
    return (
        <React.Fragment>
            <section className="current_pod_screen">
              <Card className="h-100">
                <Card.Img
                  src={bigImage}
                  alt="Card image"
                  className="h-100"
                />
                <Card.ImgOverlay>
                  <div className="current_pod_wrapper">
                    <Audio className="player"/>
                  </div>
                  <Card.Text className="current_pod_title">
                    Burna Buy: I deserved to win Grammy
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
                <section className="current_pod_caption">
                  <p className="current_podcast_signal"><i className="fas fa-dot-circle live_dot_signal"></i> Live</p>
                  <p className="current_podcast_caption">An ongoing interview session with NDDC Chairman</p>
                </section>
            </section>
        </React.Fragment>
    )
}
