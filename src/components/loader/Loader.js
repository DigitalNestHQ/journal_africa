import React from 'react';
import './loader.css';
import logoImg from 'assets/images/logo white.png';

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div className="loader">
        <img src={logoImg} alt="TV24Africa" />
      </div>
    </div>
  );
};

export default Loader;
