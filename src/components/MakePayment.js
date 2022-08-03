import "../assets/styles/MakePayment.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// import auth from "../auth";
import { processPayment } from "../api/axiosCall";
import Spinner from "./Spinner";

import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const MakePayment = () => {
  const [total_amount, setTotalAmount] = useState();
  const [currency, setCurrency] = useState("");
  const [userName, setUserName] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const history = useHistory();
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
      const response = await processPayment.post("/transaction/initiate", data);
      console.log(response.data);
      setIsLoading(false);

      //* Save the transaction id to localstorage
      const { transaction_id } = response.data;
      localStorage.setItem("transaction_id", transaction_id);
      localStorage.setItem("total_amount", total_amount);
      localStorage.setItem("currency", currency);
      localStorage.setItem("userName", userName);

      //* Move to confirm page
      history.push("/get-psp");
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (error.code === "ERR_NETWORK") {
        history.push("/maintainance");
      }
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
          <Link to="/" span-parent>
            <span class="material-icons arrow">arrow_backward</span>
          </Link>
          <h3 className="form-title">Payment Details</h3>

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
                Select Currency
              </option>
              <option value="XAF">XAF</option>
              <option value="USD">USD</option>
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
