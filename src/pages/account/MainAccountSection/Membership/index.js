import { Modal } from "components/primary/Modal";
import "../index.css";
import "./index.css";
import Sad from "../../../../assets/images/sad.png";
import { useEffect, useState } from "react";
import { withAuthToken } from "utils/axios";
import { toast } from "react-toastify";

export const Membership = () => {
  const [modalType, setModalType] = useState("");
  const [loading, setLoading] = useState(false);

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

  function subscribe(plan) {
    setLoading(true);

    const body = {
      user_id: user.id,
      user_name: `${user.firstname} ${user.lastname}`,
      package: plan.name,
      package_id: plan.id,
      amount: plan.price_ngn,
      tx_ref: `${user.id}-${Date.now()}`,
    };

    fetch(`${process.env.REACT_APP_API_BASE_URL}/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setModalType("");
        if (res.status === "success") {
          toast("Subscription added  successfully", { type: "success" });
        } else {
          toast("An error occurred", { type: "error" });
        }
      })
      .catch((e) => {
        setLoading(false);
        toast(e.message, { type: "error" });
      });
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
          closeModal={() => (!loading ? setModalType("") : null)}
        >
          {!loading ? (
            <div className="modal-child">
              {plans.map((plan) => {
                const {
                  id,
                  description,
                  name,
                  duration,
                  price_ngn,
                  price_usd,
                } = plan;

                return (
                  <button
                    onClick={() => subscribe(plan)}
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
                );
              })}
            </div>
          ) : (
            <div className="modal-child">
              <div>
                <div
                  style={{
                    padding: "22px",
                    textAlign: "center",
                    width: "400px",
                  }}
                  className="value"
                >
                  Subscribing. Please Wait...
                </div>
              </div>
            </div>
          )}
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
            <div className="value" style={{ margin: 0, textAlign: "center" }}>
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
