import { Modal } from "components/primary/Modal";
import "../index.css";
import "./index.css";
import Mastercard from "../../../../assets/images/mastercard.png";
import Cards from "../../../../assets/images/cards.png";
import { useState } from "react";
import { Form } from "./Form";
import { withAuthToken } from "utils/axios";
import { useEffect } from "react";

export const Billing = () => {
  const [modalType, setModalType] = useState("");
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  async function getCards() {
    const { data } = await withAuthToken.get("/get-card");
    setCards(data.data);
  }

  useEffect(() => {
    if (modalType === "") {
      getCards();
    }
  }, [modalType]);

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
              closeModal={() => {
                setModalType("");
                getCards();
              }}
              currentCard={currentCard}
            />
          </div>
        </Modal>
      )}

      <p>Edit your payment details or change your preferred payment method.</p>

      <div className="billing-main">
        {cards.map((cardItem, index) => {
          const { number, type, preferred } = cardItem;

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
              key={cardItem.id}
              className={`billing-box box ${
                index < cards.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="billing-wrapper">
                <img src={card()} alt="card-icon" />
                <div className="value">
                  **** **** ****{" "}
                  {number.slice(number.length - 5, number.length - 1)}
                </div>
              </div>

              <div className="billing-actions">
                {preferred && <span>PREFFERRED</span>}
                <button
                  onClick={() => {
                    setModalType("edit");
                    setCurrentCard(cardItem);
                  }}
                  className="billing-alt-button"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setModalType("add")}
        className="billing-main-button main-button"
        style={{ width: "320px" }}
      >
        Add New Payment Method
      </button>
    </div>
  );
};
