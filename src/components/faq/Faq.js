// React
import React from "react"
import Footer from "../reusables/navigation/Footer/footer"
import Navbar from "../reusables/navigation/Nav/nav"
import { Row, Col } from "react-bootstrap"
import "./faq.css"

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
          <div className="card-body">{answer}</div>
        </div>
      </div>
    </>
  )
}

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className="section-content-default" id="faq">
        <div className="section-wrapper-default">
          <h5 className="section-heading-default text-center mb-5">
            Frequently Questions
          </h5>
          <Row>
            <Col xs={12} className="accordion" id="paceFaq">
              <FaqCard
                cardNumber="question1"
                collapseNumber="collapse1"
                question="What is Journal Africa?"
                answer="Journal Africa is a Pan-African publication dedicated to providing you with impartial and authoritative news stories. 
                Published as a digital-only subscription
                service (Journal Africa) and a free to read news service (News Journal Africa), both publications focuses on well research and fact based contents produced by our in-house analysts, reporters spread across the continent and other verified contributors.The Premium service comes in different subscription plans to enable access to premium contents on the site. Please visit our subscription page for more or send a mail to contact@journal.africa"
              />
              <FaqCard
                cardNumber="question2"
                collapseNumber="collapse2"
                question="How can I register an account on Journal Africa?"
                answer="Click on the ‘sign up” button in the home page’s header and enter your personal details. A confirmation email will be sent to you. Click on the email to confirm and your account will be registered."
              />
              <FaqCard
                cardNumber="question3"
                collapseNumber="collapse3"
                question="Where can I find my personal account on the website ?"
                answer="If you are not signed in, please click on the button ‘sign in’ at the top right of your screen. Enter your login details, then click on “My Account’ at the top right hand corner of your screen and you will be directed to your personal account."
              />
              <FaqCard
                cardNumber="question4"
                collapseNumber="collapse4"
                question="How can I log in my account?"
                answer="Click on the button ‘sign in’ in the homepage’s header or anywhere else on the site. Enter your registered email and password and you will be logged in to your account."
              />
              <FaqCard
                cardNumber="question5"
                collapseNumber="collapse5"
                question="I have created an account, but I cant log in"
                answer="You don’t have an active account, in which case, please create an account as you subscribe.
                 You’re a subscriber but you have a problem with your login details, in which case, please ask for a password change. Click on ‘Forgot password’ in the login page and you will receive a new password in your email box."
              />
              <FaqCard
                cardNumber="question6"
                collapseNumber="collapse6"
                question="I forgot my password. What can I do?"
                answer="If you have forgotten your password, click on ‘Forgot password?’ and enter the email address linked to your Journal Africa customer account. You will receive an email with a link to change your password within a minute in this email box."
              />
              <FaqCard
                cardNumber="question7"
                collapseNumber="collapse7"
                question="How can I change my password?"
                answer="To change your password, go in your personal account’s My profile section. First, enter your current password. Then choose you new password and confirm it. Do not forget to click on Save."
              />
              <FaqCard
                cardNumber="question8"
                collapseNumber="collapse8"
                question="Can I access contents on Journal Africa after registering an account?"
                answer="Creating an account on Journal Africa give you access to free contents in the website and app. However, to access premium contents, you will need to subscribe to one of our subscription offers."
              />
              <FaqCard
                cardNumber="question9"
                collapseNumber="collapse9"
                question="How can I check when my account subscription will expire?"
                answer="To find your subscription expiry, you just have to go in your personal account and click on My subscription section. The date of your subscription’s expiration will appear on the screen."
              />
              <FaqCard
                cardNumber="question10"
                collapseNumber="collapse10"
                question="Can I change my subscription to different subscription offers."
                answer="Yes, you can change your subscription from any of the subscription offers (monthly, quarterly or yearly) to any one your choice."
              />
              <FaqCard
                cardNumber="question11"
                collapseNumber="collapse11"
                question="How do I subscribe to Journal Africa?"
                answer="1. Click on the button ‘Subscribe’ or ‘sign up’ in the  homepage’s header or anywhere else on the site. 
                2. Choose the subscription offer and the currency you want to pay with.
                3. Enter your personal information and your payment detail to subscribe.
                4. Verify your subscription from the email link sent to you.
                5. Enjoy your subscription on Journal Africa."
              />
              <FaqCard
                cardNumber="question12"
                collapseNumber="collapse12"
                question="What are the benefits of subscribing to Journal Africa?"
                answer="A subscription to Journal Africa gives you an unlimited access to the Journal Africa website and mobile app optimized for all screens with in-depth analysis, correct to detail exclusive stories, expert curation and expansive coverage of Africa. You will also receive our exclusive newsletters and special benefits exclusive to premium users only."
              />
              <FaqCard
                cardNumber="question13"
                collapseNumber="collapse13"
                question="What are the different subscription offers?"
                answer="The monthly subscription includes a full access to all Journal Africa digital content and our exclusive newsletters. It also gives you access to special benefits that may be available from time to time. This offer is to be paid every month at the prevailing subscription rate.
                The quarterly subscription includes a full access to all Journal Africa digital content and our exclusive newsletters. It also gives you access to special benefits that may be available from time to time. This offer is to be paid every quarter at the prevailing subscription rate.
                The annual subscription includes a full access to all Journal Africa digital content and our exclusive newsletters. It also gives you access to special benefits that may be available from time to time. This offer is to be paid every year at the prevailing subscription rate.
                The corporate plan is made for a team. Please contact us for a bespoke access deal to fit your needs"
              />
              <FaqCard
                cardNumber="question14"
                collapseNumber="collapse14"
                question="Is my subscription automatically renewable?"
                answer="Yes, your subscription is renewed automatically at the end of your current subscription depending on the subscription offer you choose."
              />
              <FaqCard
                cardNumber="question15"
                collapseNumber="collapse15"
                question="How can I cancel my subscription to Journal Report?"
                answer="To cancel your subscription, go into your account, in the My subscription section and click on ‘Cancel subscription’. You will then receive a confirmation email."
              />
              <FaqCard
                cardNumber="question16"
                collapseNumber="collapse16"
                question="Can I cancel my subscription?"
                answer="Yes, you can cancel your subscription at any time, but your current subscription will remain valid until the period of its expiration. To cancel your subscription, please proceed to your personal account section and click on ‘cancel my account."
              />
              <FaqCard
                cardNumber="question17"
                collapseNumber="collapse17"
                question="Can I receive a refund After cancelling my subscription?"
                answer="By purchasing your subscription, you agree that we may start your subscription immediately. If you change your mind and cancel your subscription, you will not be entitled to a refund, but your current subscription will remain valid and active until the stated expiry date and you will not be debited for a renewal."
              />
              <FaqCard
                cardNumber="question18"
                collapseNumber="collapse18"
                question="Can't find what you're looking for?"
                answer="Send us a mail to contact@journal.africa and one of our customer support advocate will respond to you."
              />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Faq
