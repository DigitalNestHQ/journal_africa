import { Modal } from "components/primary/Modal";
import "../index.css";
import "./index.css";
import Sad from "../../../../assets/images/sad.png";
import { useEffect, useState } from "react";
import { withAuthToken } from "utils/axios";
import { toast } from "react-toastify";

export const Membership = () => {
  const [modalType, setModalType] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const [plans, setPlans] = useState([]);

  async function getPlans() {
    try {
      const { data } = await withAuthToken.get("/plans");
      setPlans(data.plans);
    } catch (e) {
      toast(e.message, { type: "error" });
    }
  }

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <div className="right-top">
      <h2>MY MEMBERSHIP</h2>

      {modalType === "cancel" && (
        <Modal title="Cancel Subscription" closeModal={() => setModalType("")}>
          <div className="modal-child">
            <img src={Sad} alt="sad-emoji" />
            <div className="text">
              <p>We are sad to let you go.</p>
              <p>Are you sure you want to Cancel your Subscription ?</p>
            </div>

            <div className="buttons-holder">
              <button
                onClick={() => setModalType("cancel")}
                className="alt-button"
              >
                No
              </button>
              <button className="main-button">Yes</button>
            </div>
          </div>
        </Modal>
      )}

      {modalType === "plans" && (
        <Modal
          title="Choose Subscription Plan"
          closeModal={() => setModalType("")}
        >
          <div className="modal-child">
            {plans.map(
              ({ id, description, name, duration, price_ngn, price_usd }) => (
                <button
                  style={{
                    maxWidth: "560px",
                    padding: "28px 21px",
                    margin: "12px auto",
                  }}
                  key={id}
                >
                  <div style={{ fontSize: "16px", fontWeight: "600" }}>
                    {name}
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      marginTop: "12px",
                    }}
                  >
                    <span>NGN {Number(price_ngn).toLocaleString()}</span> -{" "}
                    <span>USD {price_usd}</span> for {duration}
                  </div>
                  <div style={{ marginTop: "12px" }}>
                    <span>{description}</span>
                  </div>
                </button>
              )
            )}
          </div>
        </Modal>
      )}

      <p>
        Your Digital – Monthly subscription to Journal Africa gives you
        unrestricted access to all Journal Africa contents, on the web and
        mobile apps as well as other benefits that may be available to premium
        subscribers.
      </p>

      <div className="main">
        {user.subscribe ? (
          <div>
            <div className="box">
              <div className="label">My Plan</div>
              <div className="value">NGN 2,300 / Month</div>
            </div>

            <div className="box next-box">
              <div className="label">Next Billing Date</div>
              <div className="value">May 4, 2022</div>
            </div>
          </div>
        ) : (
          <div className="box">
            <div className="value" style={{ margin: 0 }}>
              Not subscribed yet
            </div>
          </div>
        )}
      </div>

      <p>
        Membership fees are billed at the beginning of each period and may take
        a few days after the billing date for it to appear on your account.
      </p>

      <div className="buttons-holders">
        {user.subscribe ? (
          <button
            onClick={() => setModalType("cancel")}
            className="alt-button"
            style={{ width: "100%" }}
          >
            Cancel Subscription
          </button>
        ) : (
          <button
            onClick={() => setModalType("plans")}
            className="main-button"
            style={{ width: "100%" }}
          >
            Choose Subscription
          </button>
        )}
        <div className="spacer"></div>
        {user.subscribe && (
          <button className="main-button" style={{ width: "100%" }}>
            Upgrade Subscription
          </button>
        )}
      </div>
    </div>
  );
};
