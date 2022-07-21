import "../assets/styles/MakePayment.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

const MakePayment = () => {
  const url = "http://localhost:3000/InitiatePayment";
  const history = useHistory();
  const [data, setData] = useState({
    TransactionId: Math.random() * (100000000 - 1) + 1,
    receiver: "",
    amount: "",
    payment_method: "",
    status: "Pending",
    date: new Date().toLocaleDateString(),
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        TransactionId: data.TransactionId,
        receiver: data.receiver,
        amount: data.amount,
        payment_method: data.payment_method,
        status: data.status,
        date: data.date,
      })
      .then((res) => {
        console.log(res);
        history.push("/confirm-payment");
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <section className="container">
      <div className="form-container">
        <form onSubmit={(e) => submit(e)}>
          <h3 className="form-title">Pay</h3>

          <div className="form-group">
            <label for="username">Recipient</label>
            <input
              onChange={(e) => handle(e)}
              id="receiver"
              value={data.receiver}
              type="text"
              placeholder="Receivers email or PayZone ID"
            />
          </div>

          <div className="form-group">
            <label for="username">Amount</label>
            <input
              onChange={(e) => handle(e)}
              id="amount"
              value={data.amount}
              type="number"
              placeholder="Amount in XAF"
            />
          </div>

          <div className="form-group payment-providers">
            <select
              onChange={(e) => handle(e)}
              id="payment_method"
              value={data.payment_method}
            >
              <option value="" disabled>
                Select a payment provider
              </option>
              <option value="MTN Mobile Money">MTN Mobile Money</option>
              <option value="Orange Money">Orange Money</option>
              <option value="Western Union">Western Union</option>
            </select>
          </div>
          <button>Next</button>
        </form>
      </div>
    </section>
  );
};

export default MakePayment;
