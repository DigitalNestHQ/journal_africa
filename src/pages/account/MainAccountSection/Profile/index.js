import { useEffect, useState } from "react";
import "../index.css";
import "./index.css";

export const Profile = () => {
  const [loading] = useState(false);
  const [showPassword, setShowPassword] = useState("");
  const [user, setUser] = useState({});

  const { username, firstName, lastName, email, profession, password } = user;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case "firstName":
        setUser((prevState) => ({ ...prevState, firstName: value }));
        break;
      case "lastName":
        setUser((prevState) => ({ ...prevState, lastName: value }));
        break;
      case "email":
        setUser((prevState) => ({ ...prevState, email: value }));
        break;
      case "password":
        setUser((prevState) => ({ ...prevState, password: value }));
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    setUser({
      ...user,
      firstName: user.firstname,
      lastName: user.lastname,
    });
  }, []);

  return (
    <div className="right-top">
      <h2>MY PROFILE</h2>

      <form onSubmit={onSubmit}>
        <div className="input-pair">
          <div className="form-group">
            <label htmlFor="firstName" className="reg-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First name..."
              className="form-control reg-input"
              value={firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="reg-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name..."
              className="form-control reg-input"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-pair">
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
        </div>

        <div className="buttons-wrapper">
          <button type="button" className="profile-alt-button alt-button">
            Cancel
          </button>
          <input
            type="submit"
            value={`${loading ? "Please wait..." : "Save Changes"}`}
            className="btn btn-red btn-block mb-3"
            disabled={loading}
          />
        </div>
      </form>

      <h2 style={{ marginTop: "56px" }}>CHANGE PASSWORD</h2>

      <form onSubmit={onSubmit}>
        <div className="input-pair">
          <div className="form-group">
            <label htmlFor="firstName" className="reg-label">
              Current Password
            </label>
            <input
              type="text"
              name="password"
              placeholder="Current password..."
              className="form-control reg-input"
              value={firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="reg-label">
              New Password
            </label>
            <input
              type="text"
              name="newPassword"
              placeholder="New password..."
              className="form-control reg-input"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="buttons-wrapper">
          <button type="button" className="profile-alt-button alt-button">
            Cancel
          </button>
          <input
            type="submit"
            value={`${loading ? "Please wait..." : "Save Changes"}`}
            className="btn btn-red btn-block mb-3"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};
