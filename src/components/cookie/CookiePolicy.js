import React, { Fragment } from 'react'
import Nav from '../reusables/navigation/Nav/nav'
import Footer from '../reusables/navigation/Footer/footer'

import './cookie.css'

const CookiePolicy = () => {
  return (
    <Fragment>
      <Nav />
      <div className="section-content-default privacy-container">
        <div className="section-wrapper-default">
          <div className="privacy-header-component">
            <h3 className="section-heading-default text-center privacy-border-red">
              TV24 Africa Cookie Policy
            </h3>
          </div>
          <div className="cookie-txt">
            <p>
              A cookie is a small piece of text sent to your browser by a
              website that you visit. They are used for various reasons such as
              saving your search preferences, helping you to register for our
              services or providing you with targeted advertising.
            </p>
            <p>
              Thus, the cookies allow you to facilitate your visit on our
              website and they help to meet your expectations. You can view and
              manage cookies in your browser including blocking or deleting them
              completely, please refer to your browser manufacturer’s help
              documentation on how to do this.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
export default CookiePolicy
