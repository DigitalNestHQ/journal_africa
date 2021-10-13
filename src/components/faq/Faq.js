// React
import React from "react";
import Footer from "../reusables/navigation/Footer/Footer";
import Navbar from "../reusables/navigation/Nav/Nav";
import "./faq.css";

const FaqCard = ({ cardNumber, collapseNumber, question, answer }) => {
  return (
    <>
      <div className="faq card mb-1">
        <div className="card-header p-2" id={cardNumber}>
          <h5 className="mb-0">
            <button
              className="question btn text-left"
              type="button"
              data-toggle="collapse"
              data-target={`#${collapseNumber}`}
              aria-expanded="true"
              aria-controls={collapseNumber}
            >
              Q: {question}
            </button>
          </h5>
        </div>
        {/* Add class show to make answes display by default */}
        <div
          id={collapseNumber}
          className="collapse"
          aria-labelledby={cardNumber}
          data-parent="#paceFaq"
        >
          <div className="card-body">
            <b>Answer:</b> {answer}
          </div>
        </div>
      </div>
    </>
  );
};

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className="container py-3 mb-5" id="faq">
        <h3 className="text-center mb-5">
          <span className="pace-accent-color">Frequestly Asked</span>{" "}
          <span className="pace-primary-color">Questions</span>
        </h3>
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="accordion" id="paceFaq">
              <FaqCard
                cardNumber="question1"
                collapseNumber="collapse1"
                question="How many news can I read per day?"
                answer="Unlimited."
              />
              <FaqCard
                cardNumber="question2"
                collapseNumber="collapse2"
                question="Question 2?"
                answer="Amswer 2."
              />
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
