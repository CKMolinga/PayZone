import "../assets/styles/MakePayment.css";
import { Link } from "react-router-dom";

// import axios from "axios";
// import { useState } from "react";

import PaymentSuccesful from "../assets/payment-successful.gif";

const SuccessPage = () => {
  return (
    <section className="container">
      <div className="form-container">
        <form className="transaction">
          <img src={PaymentSuccesful} className="PaymentSuccesful-img" alt="" />
          <p className="payment-description">
            {" "}
            Sucessful payment of{" "}
            <span className="green">{localStorage.getItem("amount")}</span> XAF
            to
          </p>

          <div className="form-group go-to-home">
            <Link to="/">Back To Home</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SuccessPage;
