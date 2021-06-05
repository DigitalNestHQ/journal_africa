import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./podcastspagenavbar.css";
import hambuger from './../../../assets/images/hamburger.png'
import spod from './../../../assets/images/search-pod.png'
import logoWhite from './../../../assets/images/logo white.png'


export const PodCastsPageNavBar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    return (
        <React.Fragment>
            <div className="pod_top_logo">
                <img src={logoWhite} />
            </div>
            <nav className="pod_navbar navbar navbar-expand-lg pt-3 pt-lg-1">
                <div className="container-fluid">
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
                   
                    <div className={` collapse navbar-collapse ${openNavbar ? "d-block" : " d-none"}`} id="navbarSupportedContent">
                        <div className="text-white big_screen_burger">
                            <img src={hambuger}></img>
                            <div className="d-flex px-3 left_nav_item">
                                <section className="menu_text">
                                    <span className="">Menu</span>
                                </section>
                                <section className="px-3 pod_search_area">
                                    <i className="px-2">
                                        <img src={spod}></img>
                                    </i>
                                    <span>
                                        Search
                                    </span>
                                </section>
                            
                            </div>
                        </div>

                        <ul className="navbar-nav me-uto mb-2 mb-lg-0">

                        <li className="nav-item d-lg-none">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="nav-link active" aria-current="page" href="#">
                            Discover Africa
                            </a>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="nav-link active" aria-current="page" href="#">
                            Politics/Governance
                            </a>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="nav-link" aria-current="page" href="#">
                            Business
                            </a>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="nav-link" aria-current="page" href="#">
                            Entertainment
                            </a>
                        </li>
                        <li className="nav-item d-lg-none">
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
                                className="nav-link text-white login_navlink"
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
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
