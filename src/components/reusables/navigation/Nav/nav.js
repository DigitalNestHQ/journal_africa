import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import newLogo from "../../../../assets/images/main logo.png"
import hamburger from "../../../../assets/images/hamburger.svg"
import close from "../../../../assets/images/close.svg"
import { useViewPort } from "../../../hooks/Viewport"
import { pageurl } from "../../../../utils/constants"
import TopNav from "../../topnav"
import "./nav.css"
import "../../header.css"
import MobileNav from "./MobileNav"
import { logout } from "../../../../store/actions/userActions"

const Navbar = () => {
  const { width } = useViewPort()
  const breakpoint = 1250
  const [menu, setMenu] = useState(false)
  const dispatch = useDispatch()
  const loginUser = useSelector((state) => state.loginUser)
  const { token } = loginUser

  const handleMenuClick = () => {
    setMenu((prev) => !prev)
  }

  return (
    <div className="navigation">
      <TopNav />
      <header className="navigation-header">
        <div className="header-wrapper">
          <Link to="/" className="img-container">
            <img src={newLogo} alt="logo" className="logo" id="image-sizing" />
          </Link>
          {width > breakpoint ? (
            <ul className="nav-links">
              <li className="nav-item">
                <Link to={pageurl.HOMEPAGE}>Home</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/news/categories",
                    search: "?category=Discover Africa",
                  }}
                >
                  discover africa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/news/categories",
                    search: "?category=Politics",
                  }}
                >
                  politics and government
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/news/categories",
                    search: "?category=Business",
                  }}
                >
                  business and economy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/news/categories",
                    search: "?category=Development",
                  }}
                >
                  policy and development
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/podcast">podcast</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
          {width > breakpoint ? (
            <div className="cta-buttons">
              <ul className="cta-list">
                <li className="cta-item">
                  {token ? (
                    <a href="#!" onClick={() => dispatch(logout())}>
                      <span className="hide-sm">Sign out</span>
                    </a>
                  ) : (
                    <Link to="/login">sign in</Link>
                  )}
                </li>
                <li className="cta-item subscribe text-center">
                  <Link to="/subscribe" className="nav-sub-link">
                    subscribe
                  </Link>
                </li>
                <li className="cta-item">
                  <Link to="/search">
                    <i className="fas fa-search"></i>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="hamburger" onClick={handleMenuClick}>
              <img src={menu ? close : hamburger} alt="X" id="image-sizing" />
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
        ""
      )}
    </div>
  )
}

export default Navbar
