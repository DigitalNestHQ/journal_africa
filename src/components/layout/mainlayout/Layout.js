import React from "react"
import Nav from "../../reusables/navigation/Nav/Nav"
import Footer from "../../reusables/navigation/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
