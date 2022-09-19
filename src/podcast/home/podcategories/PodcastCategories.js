import React from 'react';
import './podCategory.css';
import PodcastItem from './PodcastItem';

const PodcastCategories = ({ header, podcasts }) => {
  const uniqueIds = [];

  const uniquePodcast = podcasts.filter((item) => {
    const isDuplicate = uniqueIds.includes(item.category);

    if (!isDuplicate) {
      uniqueIds.push(item.category);
      return true;
    }
    return false;
  });

  return (
    <div className='each-pod-category'>
      <div className='pod-category-header'></div>
      <div className='pod-category-list'>
        {uniquePodcast.map((podcast) => (
          <PodcastItem key={podcast.id} podcastItem={podcast} />
        ))}
      </div>
    </div>
  );
};

export default PodcastCategories;
