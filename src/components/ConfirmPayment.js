import "../assets/styles/MakePayment.css";
import Spinner from "./Spinner";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

// import { Link } from "react-router-dom"z;

const ConfirmPayment = () => {
  const history = useHistory();
  const [isloading, setIsLoading] = useState(false);
  const [phone_number, setPhoneNumber] = useState("");

  const transaction_id = localStorage.getItem("transaction_id");
  const amount = localStorage.getItem("total_amount");
  const currency = localStorage.getItem("currency");
  const gateway = localStorage.getItem("gateway");
  const paymentType = "button";
  const userName = localStorage.getItem("userName");

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = {
        transaction_id,
        amount,
        currency,
        gateway,
        phone_number,
        paymentType,
        userName,
      };
      const response = await axios.post(
        `http://localhost:8080/payment/makepayment/${transaction_id}`,
        data
      );
      console.log(response.data);
      setIsLoading(false);
      history.push("/success");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  function handleChange(e) {
    e.preventDefault();
    // Check if input is empty or not a number
    const isCameroonianPhoneNumber = /^6[5789]{1}[0-9]{7}$/;
    if (
      e.target.value === "" ||
      !isCameroonianPhoneNumber.test(e.target.value)
    ) {
      e.target.style.border = "1px solid red";
      document.getElementById("confirm-payment").disabled = true;
      const errorMessage = document.querySelector(".error-message");
      errorMessage.innerHTML = "Please enter a valid Cameroonian phone number";
    } else {
      e.target.style.border = "1px solid green";
      document.getElementById("confirm-payment").disabled = false;
      //hide error message
      const errorMessage = document.querySelector(".error-message");
      errorMessage.innerHTML = "";
    }
    setPhoneNumber(e.target.value);
  }

  return (
    <section className="container">
      <div className="form-container">
        <form onSubmit={submit}>
          <h3 className="form-title">Confirm Payment</h3>

          <div className="form-group">
            <p className="amount">
              You are paying{" "}
              <span className="green">
                {amount} {currency}{" "}
              </span>{" "}
              to <span className="green">{userName}</span> via{" "}
              <span className="green">{gateway}.</span> Please enter your phone
              number to confirm your payment.
            </p>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              onChange={handleChange}
              type="text"
              value={phone_number}
              placeholder="Enter your phone number"
              id="username"
            />
            <div className="error-message"></div>
          </div>

          <button id="confirm-payment">Confirm Payment</button>

          {isloading && <Spinner />}
        </form>
      </div>
    </section>
  );
};

export default ConfirmPayment;
