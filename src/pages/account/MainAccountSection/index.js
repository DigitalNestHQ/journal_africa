import "./index.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Subscription } from "./Subscription";
import { Profile } from "./Profile";
import { Membership } from "./Membership";
import { Billing } from "./Billing";
import { Contact } from "./Contact";

export const MainAccountSection = () => {
  const [checked, setChecked] = useState(false);

  const tabs = [
    "My Account",
    "My Profile",
    "Membership Details",
    "Billing Details",
    "Contact",
  ];

  const { pathname, search } = useLocation();
  const current = search.split("?current=")[1];

  const currentTab = () => {
    switch (current) {
      case "my-profile":
        return <Profile />;
      case "membership-details":
        return <Membership />;
      case "billing-details":
        return <Billing />;
      case "contact":
        return <Contact />;
      default:
        return <Subscription />;
    }
  };

  return (
    <section className="main-account-section">
      <div className="left">
        <div className="left-main">
          <div className="left-top">
            <div className="profile-wrapper">
              <img
                src="https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="profile-pic"
                className="profile-pic"
              />
            </div>

            <h1> Chidera Ugo</h1>
          </div>

          <div className="left-bottom">
            {tabs.map((tab) => {
              return (
                <Link
                  to={`/account?current=${tab
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  key={tab}
                  className={`tab ${
                    current === tab.split(" ").join("-").toLowerCase() ||
                    (pathname === "/account" &&
                      !current &&
                      tab.split(" ").join("-").toLowerCase() === "my-account")
                      ? "active-tab"
                      : "inactive-tab"
                  }`}
                >
                  <span>{tab}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <button className="alt-button">Close Account</button>
      </div>
      <div className="right">
        {currentTab()}
        {current !== "contact" && (
          <div className="right-bottom">
            <h2>Notifications</h2>

            <div className="newsletter">
              <p>
                I wish to receive newsletters, promotions and news from JOURNAL
                AFRICA
              </p>

              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(e) => setChecked(e.target.value)}
                  value={checked}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
