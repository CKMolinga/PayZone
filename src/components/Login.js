import "../assets/styles/MakePayment.css";
import { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();c
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3 className="form-title">Login to PayZone</h3>

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="form-group">
            <label>Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter User Name"
              required
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
            />
          </div>

          <button>Login</button>

          <p className="form-group">
            Don't have an account yet?{" "}
            <span>
              {" "}
              <Link to="/coming-soon">Sign Up</Link>{" "}
            </span>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
