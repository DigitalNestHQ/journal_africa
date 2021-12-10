import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/TV24Ergb.png'
import hamburger from '../../../../assets/images/hamburger.svg'
import close from '../../../../assets/images/close.svg'
import { useViewPort } from '../../../../components/hooks/Viewport'
import { pageurl } from '../../../../utils/constants'
import TopNav from '../../topnav'
import './nav.css'
import '../../header.css'
import { HandleAuthButton } from './HandleAuthButton'
import MobileNav from './MobileNav'

const Navbar = () => {
  const { width } = useViewPort()
  const breakpoint = 1250
  const [menu, setMenu] = useState(false)
 
 
  const handleMenuClick = () => {
    setMenu(prev => !prev)
  }

  return (
    <div className="navigation">
      <TopNav />
      <header className="navigation-header">
        <div className="header-wrapper">
          <div className="img-container">
            <img src={logo} alt="logo" className="logo" id="image-sizing"/>
          </div>
          {width > breakpoint ? (
            <ul className="nav-links">
              <li className="nav-item">
                <Link to={pageurl.HOMEPAGE}>Home</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Discover Africa',
                  }}
                >
                  discover africa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Politics',
                  }}
                >
                  politics and governance
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Business',
                  }}
                >
                  business and economy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Economy',
                  }}
                >
                  fact check africa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Development',
                  }}
                >
                  policy and development
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Governance',
                  }}
                >
                  commentary
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Gender',
                  }}
                >
                  gender and human rights
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Podcast',
                  }}
                >
                  podcast
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
          {width > breakpoint ? (
            <div className="cta-buttons">
              <ul className="cta-list">
                <li className="cta-item">
                  <Link to="/login">
                    <i className="fas fa-sign-in-alt"></i> sign in
                  </Link>
                </li>
                <li className="cta-item subscribe text-center">
                  <Link to="/subscribe">subscribe</Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="hamburger" onClick={handleMenuClick}>
              <img src={menu ? close : hamburger} alt="X" id="image-sizing"/>
            </button>
          )}
        </div>
      </header>
      {width < breakpoint ? <MobileNav menu={menu} handleMenuClick={handleMenuClick}/> : ''}
    </div>
  )
}

export default Navbar
