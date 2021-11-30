import React, { useContext, useEffect, useState, Fragment } from 'react'
import authContext from '../../context/auth/authContext'
// import { Weather } from '../weather/Weather'
import './header.css'
// import logoImg from 'assets/images/logo white.png'

function TopNav() {
  const userContext = useContext(authContext)
  const { user } = userContext

  let options = { year: 'numeric', month: 'long', day: 'numeric' }

  const [date] = useState(new Date().toLocaleDateString('en-US', options))

  // const authContext = useContext(AuthContext);

  useEffect(() => {
    userContext.loadUser()
    // eslint-disable-next-line
  }, [])

  // const authLinks = (
  //   <Fragment>
  //     <li className="welcome-item">
  //       <span className="welcome">
  //         Welcome {user.firstname} {user.lastname}
  //       </span>
  //     </li>
  //     <li className="welcome-item">
  //       <span>{date}</span>
  //     </li>
  //   </Fragment>
  // )

  const guestLinks = (
    <Fragment>
      <li className="welcome-item-w">
        <span className="welcome">Welcome to TV24 Africa News</span>
      </li>
      <li className="welcome-item-d">
        <span>{date}</span>
      </li>
    </Fragment>
  )

  return (
    <nav className="top-nav">
      <div className="text-white name-sp">
        <ul className="welcome-list">{guestLinks}</ul>
      </div>

      {/* the weather repost component goes here */}

      {/* <div>
        <img
          src={logoImg}
          alt="TV24 Africa logo"
          style={{ height: '50px', marginRight: '10px' }}
        />
      </div> */}

      {/* social links */}

      <ul className="soc-nav">
        <li>
          <a
            href="https://www.facebook.com/tv24africanews"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/tv24africanews"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tv24africanews/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/tv24africanews/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
