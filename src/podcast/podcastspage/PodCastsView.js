import React from 'react';
import { PodcastsContainer } from './podcastscontainer/PodcastsContainer';
import "./podcastsview-styles.css";
import { PodCastsPageNavBar } from './reusables/PodCastsPageNavBar';

export const PodCastsView = () => {
    return (
        <React.Fragment>
            <section className="view_pods">

                <PodCastsPageNavBar />
                <PodcastsContainer />
            </section>
        </React.Fragment>
    )
}
