import React from 'react';
import { PodCastsCategory } from './podcastcategory/PodCastsCategory';
import './podcastscontainer.css'

export const PodcastsContainer = () => {
    return (
        <React.Fragment>
            <section className="view_podcast_container">
                <PodCastsCategory />
            </section>
        </React.Fragment>
    )
}
