import "../assets/styles/MakePayment.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import auth from "../auth";
import { initiatePayment } from "../api/axiosCall";
import Spinner from "./Spinner";

// import { Link } from "react-router-dom";

const MakePayment = () => {
  const [total_amount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [userName, setUserName] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const history = useHistory()
  // const [return_url, setReturnUrl] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      total_amount,
      currency,
      return_url: "localhost",
      name: userName,
    };
    setIsLoading(true);
    try {
      const response = await initiatePayment.post(
        "/transaction/initiate",
        data
      );
      console.log(response.data);
      setIsLoading(false);

      //* Save the transaction id to localstorage
      const { transaction_id } = response.data;
      localStorage.setItem("transaction_id", transaction_id);

      //* Move to confirm page
      history.push("/confirm-payment");
  
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // function handle(e) {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  // }

  return (
    <section className="container">
      <div className="form-container">
        <form onSubmit={(e) => submit(e)}>
          <h3 className="form-title">Pay</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              id="receiver"
              value={userName}
              type="text"
              placeholder="Receivers email or PayZone ID"
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              onChange={(e) => setTotalAmount(e.target.value)}
              id="amount"
              value={total_amount}
              type="number"
              placeholder="Amount in XAF"
            />
          </div>

          <div className="form-group payment-providers">
            <select
              onChange={(e) => setCurrency(e.target.value)}
              id="payment_method"
              value={currency}
            >
              <option value="" disabled>
                Select a payment provider
              </option>
              <option value="XAF">MTN Mobile Money</option>
              <option value="USD">Orange Money</option>
            </select>
          </div>
          <button>Next</button>

          {isloading && <Spinner />}
        </form>
      </div>
    </section>
  );
};

export default MakePayment;
