import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import "./forms.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const resetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("An email has been sent to your account to reset your password.");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="center">
      <div className="auth">
        <h1>Forgot Password</h1>
        {message && <div className="auth__message">{message}</div>}
        {error && <div className="auth__error">{error}</div>}
        <form onSubmit={resetPassword} name="forgot_password_form">
          <input
            type="email"
            value={email}
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send to Email</button>
        </form>
        <p>
          Remembered your password?
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
  export default ForgotPassword;
