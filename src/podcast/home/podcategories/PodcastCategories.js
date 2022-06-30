import React from 'react';
import './podCategory.css';
import PodcastItem from './PodcastItem';

const PodcastCategories = ({ header, podcasts }) => {
  return (
    <div className='each-pod-category'>
      <div className='pod-category-header'>
        <h5 className='section-heading-default-pod pod-header'>{header}</h5>
      </div>
      <div className='pod-category-list'>
        {podcasts.slice(0, podcasts.length).map((podcast) => (
          <PodcastItem key={podcast.id} podcastItem={podcast} />
        ))}
      </div>
    </div>
  );
};

export default PodcastCategories;
