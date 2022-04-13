import { useState } from "react";
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
      case "username":
        setUser((prevState) => ({ ...prevState, username: value }));
        break;
      case "profession":
        setUser((prevState) => ({ ...prevState, profession: value }));
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

  return (
    <div className="right-top">
      <h2>MY PROFILE</h2>

      <form onSubmit={onSubmit}>
        <div className="input-pair">
          <div className="form-group">
            <label htmlFor="username" className="reg-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              autoComplete="username"
              placeholder="Username..."
              className="form-control reg-input"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group password-input">
            <label htmlFor="password" className="reg-label">
              Password
            </label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              autoComplete="new-password"
              placeholder="Enter Password"
              className="form-control reg-input"
              value={password}
              onChange={handleChange}
              minLength="6"
              required
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "hide" : "show"}
            </span>
          </div>
        </div>

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
          <div className="form-group">
            <label htmlFor="profession" className="reg-label">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              placeholder="Profession..."
              className="form-control reg-input"
              value={profession}
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
