import { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../../../../context/auth/authContext";

export const HandleAuthButton = () =>{
    const userContext = useContext(authContext)
    const { isAuthenticated } = userContext;
    return(
      isAuthenticated &&  (
        <>
          {
            isAuthenticated ?
            <Link
              onClick={()=>userContext.logOut()}
              className="nav-link mt-3 mt-lg-0 px-4 text-white nav-sub-tp"
            >
              <i className="fas fa-sign-in-alt"></i>
              LOGOUT
            </Link>
            :
            <Link
              to="/login"
              className="nav-link mt-3 mt-lg-0 px-4 text-white nav-sub-tp"
            >
              <i className="fas fa-sign-in-alt"></i>
              SIGN IN
            </Link>
          }
        </>
      )
    )
  }