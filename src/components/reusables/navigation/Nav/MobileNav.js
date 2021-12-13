import React, { useState, useEffect } from 'react'
import { pageurl } from '../../../../utils/constants'
import { Link } from 'react-router-dom'
import './nav.css'

const MobileNav = ({ menu, handleMenuClick, isAuthenticated, logout }) => {
  const [active, setActive] = useState(1)
  //   const outsideRef = useRef('')

  useEffect(() => {
    const handleMenuHide = () => {
      handleMenuClick()
    }

    const list = document.getElementById('list')
    const links = list.getElementsByTagName('a')
    Array.from(links).forEach((link) => {
      link.addEventListener('click', handleMenuHide)
    })

    return () => {
      Array.from(links).forEach((link) => {
        link.removeEventListener('click', handleMenuHide)
      })
    }
  }, [handleMenuClick])

  //   useEffect(() => {
  //     const handleOutsideClick = (e) => {
  //       if(menu){
  //         if(outsideRef.current && !outsideRef.current.contains(e.target)){
  //           handleMenuClick()
  //         }
  //       }
  //     }
  //     document.getElementById('main').addEventListener('mousedown', handleOutsideClick)

  //     return () => {
  //       document.getElementById('main').removeEventListener('mousedown', handleOutsideClick)
  //     }
  //   })

  return (
    <div className={`mobile-menu ${menu ? 'display' : 'hide'}`}>
      <div className="mobile-link-container" id="list">
        <ul className="mobile-list">
          <li
            className={`mobile-list-item ${
              active === 1 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(1)}
          >
            <Link
              to={pageurl.HOMEPAGE}
              className={`${
                active === 1 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              Home
            </Link>
          </li>
          <li
            className={`mobile-list-item ${
              active === 2 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(2)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Discover Africa`,
              }}
              className={`${
                active === 2 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              discover africa
            </Link>
          </li>

          <li
            className={`mobile-list-item ${
              active === 3 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(3)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Politics`,
              }}
              className={`${
                active === 3 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              politics and governance
            </Link>
          </li>

          <li
            className={`mobile-list-item ${
              active === 4 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(4)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Business`,
              }}
              className={`${
                active === 4 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              business and economy
            </Link>
          </li>

          <li
            className={`mobile-list-item ${
              active === 5 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(5)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Economy`,
              }}
              className={`${
                active === 5 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              fact check africa
            </Link>
          </li>
          <li
            className={`mobile-list-item ${
              active === 6 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(6)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Development`,
              }}
              className={`${
                active === 6 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              policy and development
            </Link>
          </li>
          <li
            className={`mobile-list-item ${
              active === 7 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(7)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Governance`,
              }}
              className={`${
                active === 7 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              commentary
            </Link>
          </li>
          <li
            className={`mobile-list-item ${
              active === 8 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(8)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Gender`,
              }}
              className={`${
                active === 8 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              gender and human rights
            </Link>
          </li>
          <li
            className={`mobile-list-item ${
              active === 9 ? 'mobile-active' : ''
            }`}
            onClick={() => setActive(9)}
          >
            <Link
              to={{
                pathname: '/news/categories',
                search: `?category=Podcast`,
              }}
              className={`${
                active === 9 ? 'mobile-link-active' : 'mobile-link-inactive'
              }`}
            >
              podcast
            </Link>
          </li>
        </ul>
        <div className="mobile-cta-buttons">
          <ul className="mobile-cta-list">
            <li className="mobile-cta-item">
              {isAuthenticated ? (
                <a href="#!" onClick={logout}>
                  <span className="hide-sm">Sign out</span>
                </a>
              ) : (
                <Link to="/login">sign in</Link>
              )}
            </li>
            <li className="mobile-cta-item subscribe text-center">
              <Link to="/subscribe">subscribe</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
