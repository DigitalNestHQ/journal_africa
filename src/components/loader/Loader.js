import React from 'react';
import './loader.css';
import newLogo from 'assets/images/tv-journal-logo.png';

const Loader = () => {
  return (
    <div className='loader_wrapper'>
      <div className='loader'>
        <img src={newLogo} alt='TV24Africa' className='loader-img' />
      </div>
    </div>
  );
};

export default Loader;
