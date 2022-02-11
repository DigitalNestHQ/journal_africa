import React from "react"
import "./loader.css"
import logoImg from "assets/images/logo white.png"
import newLogo from "assets/images/updatedLogo.jpeg"

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div className="loader">
        <img src={newLogo} alt="TV24Africa" className="loader-img" />
      </div>
    </div>
  )
}

export default Loader
