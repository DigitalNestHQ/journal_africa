import { Modal } from "components/primary/Modal";
import "../index.css";
import "./index.css";
import Mastercard from "../../../../assets/images/mastercard.png";
import Cards from "../../../../assets/images/cards.png";
import { useState } from "react";
import { Form } from "./Form";

export const Billing = () => {
  const [modalType, setModalType] = useState("");

  const cards = [
    {
      number: "3455",
      type: "mastercard",
      prefferred: true,
    },
  ];

  return (
    <div className="right-top">
      <h2>MY PAYMENT INFO</h2>

      {modalType && (
        <Modal
          title={
            modalType === "add" ? "New Payment Method" : "Edit Payment Method"
          }
          closeModal={() => setModalType("")}
        >
          <div className="modal-child">
            <img src={Cards} alt="cards" />
            <Form
              buttonText={
                modalType === "add" ? "Save New Card" : "Save Changes"
              }
            />
          </div>
        </Modal>
      )}

      <p>Edit your payment details or change your preferred payment method.</p>

      <div className="billing-main">
        {cards.map(({ number, type, prefferred }, index) => {
          const card = () => {
            switch (type) {
              case "mastercard":
                return Mastercard;
              default:
                return Mastercard;
            }
          };

          return (
            <div
              key={number}
              className={`billing-box box ${
                index < cards.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="billing-wrapper">
                <img src={card()} alt="card-icon" />
                <div className="value">**** **** **** {number}</div>
              </div>

              <div className="billing-actions">
                {prefferred && <span>PREFFERRED</span>}
                <button className="billing-alt-button">Edit</button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setModalType("add")}
        className="billing-main-button main-button"
      >
        Add New Payment Method
      </button>
    </div>
  );
};
