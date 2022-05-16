import { useState } from "react";
import { toast } from "react-toastify";
import "../index.css";
import "./index.css";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const { fullName, message, subject, email, phoneNumber } = user;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case "phoneNumber":
        setUser((prevState) => ({ ...prevState, phoneNumber: value }));
        break;
      case "fullName":
        setUser((prevState) => ({ ...prevState, fullName: value }));
        break;
      case "email":
        setUser((prevState) => ({ ...prevState, email: value }));
        break;
      case "message":
        setUser((prevState) => ({ ...prevState, message: value }));
        break;
      case "subject":
        setUser((prevState) => ({ ...prevState, subject: value }));
        break;
      default:
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`${process.env.REACT_APP_API_BASE_URL}/send/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.status === "success") {
          toast("Message sent successfully", { type: "success" });
        } else {
          toast("An error occurred", { type: "error" });
        }
      })
      .catch((e) => {
        setLoading(false);
        toast(e.message, { type: "error" });
      });
  };

  return (
    <div className="right-top">
      <h2>CONTACT US</h2>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="subject" className="reg-label">
            Subject of your mail
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject of your mail..."
            className="form-control reg-input"
            value={subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName" className="reg-label">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full name..."
            className="form-control reg-input"
            value={fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="reg-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            autoComplete="new-password"
            className="form-control reg-input"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="reg-label">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number..."
            className="form-control reg-input"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="reg-label">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            rows={8}
            placeholder="Type your message here..."
            className="form-control reg-input"
            value={message}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="submit"
          value={`${loading ? "Please wait..." : "Save Message"}`}
          className="btn btn-red btn-block mb-3"
          disabled={loading}
        />
      </form>
    </div>
  );
};
