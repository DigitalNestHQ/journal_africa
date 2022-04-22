import { Modal } from "components/primary/Modal";
import { useEffect } from "react";
import { useState } from "react";
import { withAuthToken } from "utils/axios";
import "../index.css";
import "./index.css";
import { toast } from "react-toastify";

export const Subscription = () => {
  const [modalType, setModalType] = useState("");
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

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="right-top">
      <h2>MY SUBSCRIPTION</h2>

      {modalType && (
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

      <div className="subscription-buttons-holder">
        {user.subscribe && <button>Upgrade Now</button>}
        {user.subscribe && <button>Cancel Subscription</button>}
        <button onClick={() => setModalType("plans")}>
          Choose Subscription
        </button>
      </div>
    </div>
  );
};
