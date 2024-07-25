import { useState } from "react";

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="subscribe-form__input"
        placeholder="Enter your email here"
        value={email}
        onChange={handleChange}
        required
      />
      <button type="submit" className="subscribe-form__btn btn">
        Subscribe
      </button>
    </form>
  );
};
