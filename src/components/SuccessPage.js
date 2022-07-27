import "../assets/styles/MakePayment.css";
import { Link } from "react-router-dom";

import PaymentSuccesful from "../assets/payment-successful.gif";

const SuccessPage = () => {
  const amount = localStorage.getItem("total_amount");

  return (
    <section className="container">
      <div className="form-container">
        <form className="transaction">
          <img src={PaymentSuccesful} className="PaymentSuccesful-img" alt="" />
          <p className="payment-description">
            Sucessful payment of {amount} XAF
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
