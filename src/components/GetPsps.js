import "../assets/styles/MakePayment.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { pspResponse } from "../pspResponse";
import "../assets/styles/GetPsp.css";

import { Link } from "react-router-dom";

const GetPsps = () => {
  const [gateway, setGateway] = useState("");

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    console.log(gateway);

    if (gateway === "") {
      console.log("please provide a gateway");
      return;
    }
    localStorage.setItem("gateway", gateway);
    history.push("/confirm-payment");
  };

  return (
    <section className="container getpsp-container">
      <div className="form-container get-psp-form-container">
        <form onSubmit={(e) => submit(e)}>
          <Link to="/make-payment" span-parent>
            <span class="material-icons arrow">arrow_backward</span>
          </Link>
          <h3 className="form-title">Payment Method</h3>

          <div className="">
            {pspResponse.map((psp) => {
              return (
                <div key={psp.id} className="payment-provider">
                  <input
                    type="radio"
                    name="gateway"
                    id={psp.id}
                    value={psp.provider_short_tag}
                    onChange={(e) => setGateway(e.target.value)}
                    checked={gateway === psp.provider_short_tag}
                  />
                  <label htmlFor={psp.id}>{psp.provider_name}</label>
                  <img
                    className="psp-logo"
                    src={psp.provider_logo}
                    alt={psp.provider_name}
                  />
                </div>
              );
            })}
          </div>

          <button>Next</button>
        </form>
      </div>
    </section>
  );
};

export default GetPsps;
