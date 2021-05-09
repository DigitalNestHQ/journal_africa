import React from 'react';
import './livepodcastalert.css'

// THIS COMPONENT ALERT THE USER OF THE CURRENT LIVE PODCAST

export const LivePodCastAlert = () => {
    return (
        <React.Fragment>
            <section className="pod_top_section">
                <p className="ongoing_podcast_signal"><i className="fas fa-dot-circle live_dot_signal"></i> Live</p>
                <p className="ongoing_podcast_caption">An ongoing interview session with NDDC Chairman <button className="watch_btn">watch</button></p>
            </section>
        </React.Fragment>
    )
}
