import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import "./Register.css"; // import our custom CSS

export default function Register() {
  const [tab, setTab] = useState("register"); 
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });


  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/server/user/login',loginData);
      console.log('login response:',response.data);
      navigate('/bubbles');
    } catch (error) {
      alert("gmail or password is wrong");
      console.log("error:",error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/server/user/register",registerData);
      console.log("server response :",response.data);
      setTab("login");
    } catch (error) {
      console.log("error:",error.message);
    }
    
  };



  

  return (
    <div className="register-page">
      <div className="card">
        {/* Tabs */}
        <div className="tabs">
          <button
            onClick={() => setTab("login")}
            className={`tab ${tab === "login" ? "active" : ""}`}
          >
            Login
          </button>
          <button
            onClick={() => setTab("register")}
            className={`tab ${tab === "register" ? "active" : ""}`}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {tab === "login" && (
          <form onSubmit={handleLogin} className="form">
            <input
              type="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button type="submit" className="btn btn-blue">
              Login
            </button>
          </form>
        )}

        {/* Register Form */}
        {tab === "register" && (
          <form onSubmit={handleRegister} className="form">
            <input
              type="text"
              placeholder="Enter a username"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              required
            />
            <button type="submit" className="btn btn-green">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
