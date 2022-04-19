import { Modal } from "components/primary/Modal";
import "../index.css";
import "./index.css";
import Sad from "../../../../assets/images/sad.png";
import { useState } from "react";

export const Membership = () => {
  const [modalType, setModalType] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);

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
        <button
          onClick={() => setModalType("cancel")}
          className="alt-button"
          style={{ width: "100%" }}
        >
          Cancel Subscription
        </button>
        <div className="spacer"></div>
        <button className="main-button" style={{ width: "100%" }}>
          Upgrade Subscription
        </button>
      </div>
    </div>
  );
};
