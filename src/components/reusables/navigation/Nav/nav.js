import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import newLogo from '../../../../assets/images/main logo.png';
import hamburger from '../../../../assets/images/hamburger.svg';
import close from '../../../../assets/images/close.svg';
import { useViewPort } from '../../../hooks/Viewport';
import { pageurl } from '../../../../utils/constants';
import TopNav from '../../topnav';
import './nav.css';
import '../../header.css';
import MobileNav from './MobileNav';
import { logout } from '../../../../store/actions/userActions';
import userIcon from '../../../../assets/images/user-solid.svg';
import downIcon from '../../../../assets/images/down-solid.svg';
import arrowRight from '../../../../assets/images/arrow-right.svg';

const Navbar = () => {
  const { width } = useViewPort();
  const breakpoint = 1250;
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);
  const { token } = loginUser;
  const [access, setAccess] = useState(false);

  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    if (token) {
      setAccess(true);
    } else {
      setAccess(false);
    }
  }, [token]);

  const [state, setState] = useState(false);

  const handleDropdown = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div className='navigation'>
      <TopNav />
      <header className='navigation-header'>
        <div className='header-wrapper'>
          <Link to='/' className='img-container'>
            <img src={newLogo} alt='logo' className='logo' id='image-sizing' />
          </Link>
          {width > breakpoint ? (
            <ul className='nav-links'>
              <li className='nav-item'>
                <Link to={pageurl.HOMEPAGE}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Discover Africa',
                  }}
                >
                  discover africa
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=POLITICS AND GOVERNMENT',
                  }}
                >
                  politics and government
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=BUSINESS AND ECONOMY',
                  }}
                >
                  business and economy
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=POLICY AND DEVELOPMENT',
                  }}
                >
                  policy and development
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/podcast'>podcast</Link>
              </li>
            </ul>
          ) : (
            ''
          )}
          {width > breakpoint ? (
            <div className='cta-buttons'>
              <ul className='cta-list'>
                <li className='cta-item'>
                  {access ? (
                    <div className='account-links' onClick={handleDropdown}>
                      <img src={userIcon} className='profile-icon' alt='' />
                      <p>MY ACCOUNT</p>
                      <img src={downIcon} alt='' />
                      {state && (
                        <ul className='account-link-card'>
                          <Link to='/account'>
                            <li className='card-item'>
                              <img src={userIcon} alt='' />
                              <p>Dashboard</p>
                            </li>
                          </Link>
                          <li
                            className='card-item'
                            onClick={() => dispatch(logout())}
                          >
                            <img src={arrowRight} alt='' />
                            <p>Sign Out</p>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to='/login'>sign in</Link>
                  )}
                </li>
                <li className='cta-item subscribe text-center'>
                  <Link to='/subscribe' className='nav-sub-link'>
                    subscribe
                  </Link>
                </li>
                <li className='cta-item'>
                  <Link to='/search'>
                    <i className='fas fa-search'></i>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className='hamburger' onClick={handleMenuClick}>
              <img src={menu ? close : hamburger} alt='X' id='image-sizing' />
            </button>
          )}
        </div>
      </header>
      {width < breakpoint ? (
        <MobileNav
          menu={menu}
          handleMenuClick={handleMenuClick}
          token={token}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
