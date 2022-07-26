import "../assets/styles/MakePayment.css";
import { Link } from "react-router-dom";

import axios from "axios";
import { useState } from "react";

import PaymentSuccesful from "../assets/payment-successful.gif";

const SuccessPage = () => {
  const [data, setData] = useState({
    TransactionId: Math.random() * (100000000 - 1) + 1,
    receiver: "",
    amount: "",
    payment_method: "",
    status: "Pending",
    date: new Date().toLocaleDateString(),
  });

  axios.get("http://localhost:3000/InitiatePayment").then((res) => {
    setData(res.data);
    console.log(res.data.amount);
  });

  return (
    <section className="container">
      <div className="form-container">
        <form className="transaction">
          <img src={PaymentSuccesful} className="PaymentSuccesful-img" alt="" />
          <p className="payment-description">
            {" "}
            Sucessful payment of <span className="green">
              {data.amount}
            </span>{" "}
            XAF to <span className="green">{data.receiver}</span> via{" "}
            <span className="green">{data.payment_method}</span>
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
