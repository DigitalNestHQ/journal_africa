import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./podnavbar.css";
import hambuger from './../../../assets/images/hamburger.png'


export const PodNavBar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button
                        className="navbar-toggler bg-whie p-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={()=>setOpenNavbar(!openNavbar)}
                    >
                        <i className="text-white small_screen_burger">
                            <img src={hambuger}></img>
                        </i>
                    </button>
                   
                    <div className={`collapse navbar-collapse ${openNavbar ? "d-block" : " d-none"}`} id="navbarSupportedContent">
                        <i className="text-white big_screen_burger">
                            <img src={hambuger}></img>
                        </i>

                        <ul className="navbar-nav me-uto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Discover Africa
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Politics/Governance
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                            Business
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                            Entertainment
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                            Lifestyle
                            </a>
                        </li>
                        <li className="nav-item hd-bd">
                            {localStorage.token ? (
                            //   HandleAuthButton()
                            null
                            ) : (
                            <Link
                                to="/login"
                                className="nav-link text-white podcast_login_navlink"
                            >
                                <i className="fas fa-sign-in-alt"></i> SIGN IN
                            </Link>
                            )}
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link
                            to="/subscribe"
                            className="nav-link subscription_btn"
                            >
                            subscribe
                            </Link>
                            <i className="fas fa-search"></i>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
