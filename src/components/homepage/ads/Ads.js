import React from 'react';
import './ads.css';

export const LargeSizeAds = (props) => {
  return (
    <React.Fragment>
      <img src={props.img} className='large-ads-img' alt='large-ads' />
    </React.Fragment>
  );
};
