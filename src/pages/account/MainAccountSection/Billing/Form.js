import { useState } from "react";

export const Form = ({ buttonText }) => {
  const [user, setUser] = useState({});
  const [loading] = useState(false);

  const { cardNumber, exp, cvv, name } = user;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case "cardNumber":
        setUser((prevState) => ({ ...prevState, cardNumber: value }));
        break;
      case "cvv":
        setUser((prevState) => ({ ...prevState, cvv: value }));
        break;
      case "name":
        setUser((prevState) => ({ ...prevState, name: value }));
        break;
      case "exp":
        setUser((prevState) => ({ ...prevState, exp: value }));
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
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="cardNumber" className="reg-label">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          autoComplete="cardNumber"
          placeholder="Card Number..."
          className="form-control reg-input"
          value={cardNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-pair">
        <div className="form-group">
          <label htmlFor="exp" className="reg-label">
            Expiration Date
          </label>
          <input
            type="text"
            name="exp"
            placeholder="Expiration date..."
            className="form-control reg-input"
            value={exp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv" className="reg-label">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            placeholder="CVV..."
            className="form-control reg-input"
            value={cvv}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="name" className="reg-label">
          Card Owner Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Card owner name..."
          className="form-control reg-input"
          value={name}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="submit"
        value={`${loading ? "Please wait..." : buttonText}`}
        className="btn btn-red btn-block mb-3"
        disabled={loading}
      />
    </form>
  );
};
