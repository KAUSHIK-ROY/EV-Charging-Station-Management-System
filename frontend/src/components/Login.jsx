import React, { useState } from "react";
import API from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import "./Login-Register.css";
import image from "../image.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/stations");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-register-page">
      <div className="login-register-container">
        <div className="login-register-form">
          <h2>User Login</h2>
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
            <button onClick={handleLogin}>Login</button>
            <p>
              Don't have an account? <Link to='/register'><span>Register Now</span></Link>
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
