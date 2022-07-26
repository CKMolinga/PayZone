import "../assets/styles/MakePayment.css";

import axios from "axios";
import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom"z;

const ConfirmPayment = () => {
  const history = useHistory();

  function ConfirmPayment(e) {
    e.preventDefault();
    axios.get("http://localhost:3000/InitiatePayment").then((res) => {
      console.log(res);
      history.push("/success");
    });
  }

  function ValidatePhoneNumber(e) {
    e.preventDefault();
    // Check if input is empty or not a number
    if (
      e.target.value === "" ||
      isNaN(e.target.value) ||
      e.target.value.length < 9
    ) {
      e.target.style.border = "1px solid red";
      document.getElementById("confirm-payment").disabled = true;
    } else {
      e.target.style.border = "1px solid green";
      document.getElementById("confirm-payment").disabled = false;
    }
  }

  return (
    <section className="container">
      <div className="form-container">
        <form onSubmit={(e) => ConfirmPayment(e)}>
          <h3 className="form-title">Pay</h3>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              onChange={(e) => ValidatePhoneNumber(e)}
              type="text"
              placeholder="Enter your phone number"
              id="username"
            />
          </div>

          <button id="confirm-payment">Confirm Payment</button>
        </form>
      </div>
    </section>
  );
};

export default ConfirmPayment;
