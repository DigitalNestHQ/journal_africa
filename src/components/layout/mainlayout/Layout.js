import Footer from "components/reusables/navigation/Footer/Footer";
import React from "react";
import Nav from "../../reusables/navigation/Nav/Nav";

const Layout = ({ children, category }) => {
  return (
    <React.Fragment>
      <Nav />
      {category ? (
        <main className="cat-section section-content-default">
          <div className="section-wrapper-default">{children}</div>
        </main>
      ) : (
        <main>{children}</main>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
