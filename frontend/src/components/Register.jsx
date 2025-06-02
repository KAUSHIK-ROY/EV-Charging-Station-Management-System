import React, { useState } from "react";
import API from "../api/api";
import "./Login-Register.css";
import image from '../image.png'
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", { email, password });
      alert("Registered successfully");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="login-register-page">
      <div className="login-register-container">
        <div className="login-register-form">
          <h2>Register</h2>
          <div className="input-form">
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <p>
              Already have an account? <Link to= '/'><span>Log In</span></Link>
            </p>
          </div>
        </div>
        <div className="login-img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
