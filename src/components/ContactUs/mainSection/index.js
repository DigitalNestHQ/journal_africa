import React, { useState } from 'react'
import './index.css'
import ContactAds from './ContactsAds'
import { useViewPort } from '../../hooks/Viewport'

const MainSection = () => {
  const [contact, setContact] = useState({
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  
  const { width } = useViewPort()
  const breakpoint = 762

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(contact)
    setContact({
      subject: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const { subject, name, email, phone, message } = contact
  return (
    <section className="contact-section">
      <div className="register-signup-wrapper contact-wrapper">
        <div className="contact-page-main">
          <h5 className="contact-heading">Contact Us</h5>
          <div className="contact-board">
            <h5 className="contact-board-heading">Contact</h5>
            <div className="contact-board-content-grid">
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="form-group-contact">
                    <input
                      type="text"
                      placeholder="Subject of Your Mail"
                      className="form-control reg-input"
                      value={subject}
                      name="subject"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group-contact">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control reg-input"
                      name="name"
                      value={name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group-contact">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control reg-input"
                      name="email"
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group-contact">
                    <input
                      type="number"
                      placeholder="Your Phone Number"
                      className="form-control reg-input"
                      name="phone"
                      value={phone}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group-contact">
                    <textarea
                      placeholder="Your Message"
                      className="form-control reg-input"
                      rows={8}
                      value={message}
                      name="message"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group contact-form-btn-container">
                    <button type="submit" className="contact-form-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              {width > breakpoint ? (
                <div className="contact-form-ads">
                  <ContactAds />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection
