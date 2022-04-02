import React from "react"
import { Link } from "react-router-dom"
import { pageurl } from "../../utils/constants"

import "./error404.css"
import Layout from "../../components/layout/mainlayout/Layout"

const Error404 = () => {
  return (
    <Layout category={true}>
      <div className="error404-page">
        <div className="text-center heading-title">
          <h1 className="error404-heading">Oops!</h1>
          <p className="error404-text mb-5">Error 404: Page Not Found</p>
          <Link className="error404-btn" to={pageurl.HOMEPAGE}>
            Go back Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Error404
