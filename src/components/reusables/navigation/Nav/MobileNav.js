import React, { useState, useEffect } from 'react';
import { pageurl } from '../../../../utils/constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../store/actions/userActions';
import './nav.css';

const MobileNav = ({ menu, handleMenuClick, token }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);

  useEffect(() => {
    const handleMenuHide = () => {
      handleMenuClick();
    };

    const list = document.getElementById('list');
    const links = list.getElementsByTagName('a');
    Array.from(links).forEach((link) => {
      link.addEventListener('click', handleMenuHide);
    });

    return () => {
      Array.from(links).forEach((link) => {
        link.removeEventListener('click', handleMenuHide);
      });
    };
  }, [handleMenuClick]);

  return (
    <div className={`mobile-menu ${menu ? 'display' : 'hide'}`}>
      <div className='mobile-link-container' id='list'>
        <ul className='mobile-list'>
          {token ? (
            <li
              className={`mobile-list-item ${
                active === 0 ? 'mobile-active' : ''
              }`}
            >
              <Link
                to='/account'
                className={`${
                  active === 1 ? 'mobile-link-active' : 'mobile-link-inactive'
                }`}
                onClick={() => setActive(0)}
              >
                MY ACCOUNT
              </Link>
            </li>
          ) : (
            ''
          )}
          <li
            className={`mobile-list-item ${
              active === 1 ? 'mobile-active' : ''
            }`}
          >
            <Link
              to={pageurl.HOMEPAGE}
              className={`${
                active === 1 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
              onClick={() => setActive(1)}
            >
              Home
            </Link>
          </li>
          <li
            className={`mobile-list-item ${
              active === 2 ? 'mobile-active' : ''
            }`}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Discover Africa`,
              }}
              className={`${
                active === 2 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
              onClick={() => setActive(2)}
            >
              discover africa
            </Link>
          </li>

          <li
            className={`mobile-list-item ${
              active === 3 ? 'mobile-active' : ''
            }`}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Politics`,
              }}
              className={`${
                active === 3 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
              onClick={() => setActive(3)}
            >
              politics and government
            </Link>
          </li>

          <li
            className={`mobile-list-item ${
              active === 4 ? 'mobile-active' : ''
            }`}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Business`,
              }}
              className={`${
                active === 4 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
              onClick={() => setActive(4)}
            >
              business and economy
            </Link>
          </li>
          <li
            className={`mobile-list-item ${
              active === 5 ? 'mobile-active' : ''
            }`}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Development`,
              }}
              className={`${
                active === 5 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
              onClick={() => setActive(5)}
            >
              policy and development
            </Link>
          </li>

          <li
            className={`mobile-list-item ${
              active === 6 ? 'mobile-active' : ''
            }`}
          >
            <Link
              to='/podcast'
              className={`${
                active === 6 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
              onClick={() => setActive(6)}
            >
              podcast
            </Link>
          </li>
        </ul>
        <div className='mobile-cta-buttons'>
          <ul className='mobile-cta-list'>
            <li className='mobile-cta-item'>
              {token ? (
                <a href='#!' onClick={() => dispatch(logout())}>
                  <span className='hide-sm'>Sign out</span>
                </a>
              ) : (
                <Link to='/login'>sign in</Link>
              )}
            </li>
            <li className='mobile-cta-item subscribe text-center'>
              <Link to='/subscribe'>subscribe</Link>
            </li>
            <li className='mobile-cta-item'>
              <Link to='/search'>
                <i className='fas fa-search'></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
