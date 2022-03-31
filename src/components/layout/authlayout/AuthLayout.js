import React from "react"
import "./authlayout.css"
import FormHeader from "../../reusables/navigation/formsReusables/FormHeader"

const AuthLayout = ({ children }) => {
  return (
    <div className="register">
      <div className="register-signup-wrapper">
        <FormHeader />
        <>{children}</>
      </div>
    </div>
  )
}

export default AuthLayout
