import { useEffect, useState } from "react";
import "../index.css";
import "./index.css";
import { withAuthToken } from "utils/axios";
import { toast } from "react-toastify";

export const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const { firstName, lastName, email, newPassword, password } = user;

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
      case "newPassword":
        setUser((prevState) => ({ ...prevState, newPassword: value }));
        break;
      default:
        break;
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await withAuthToken.post("/update-profile", {
        firstname: firstName,
        lastname: lastName,
        email,
      });

      if (data.status === "success") {
        toast("Profile updated successfully", { type: "success" });
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            firstname: firstName,
            lastname: lastName,
            email,
          })
        );
        window.location.reload();
      }
    } catch (e) {
      toast(e.message, { type: "error" });
    }

    setLoading(false);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await withAuthToken.post("/update-password", {
        password1: user.password,
        password2: user.newPassword,
      });

      if (data.status === "success") {
        toast("Password changed successfully", { type: "success" });
      }
    } catch (e) {
      toast(e.message, { type: "error" });
    }

    setLoading(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser({
      ...user,
      firstname: user.firstname,
      lastname: user.lastname,
    });
  }, []);

  return (
    <div className="right-top">
      <h2>MY PROFILE</h2>

      <form onSubmit={handleUpdateProfile}>
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
          <input
            type="submit"
            value={`${loading ? "Please wait..." : "Save Changes"}`}
            className="btn btn-red btn-block mb-3"
            disabled={loading}
          />
        </div>
      </form>

      <h2 style={{ marginTop: "56px" }}>CHANGE PASSWORD</h2>

      <form onSubmit={handleChangePassword}>
        <div className="input-pair">
          <div className="form-group">
            <label htmlFor="firstName" className="reg-label">
              New Password
            </label>
            <input
              type="text"
              name="password"
              placeholder="Current password..."
              className="form-control reg-input"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="reg-label">
              Confirm Password
            </label>
            <input
              type="text"
              name="newPassword"
              placeholder="New password..."
              className="form-control reg-input"
              value={newPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="buttons-wrapper">
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
