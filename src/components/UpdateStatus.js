import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";
import SuccessPage from "./SuccessPage";

const UpdateStatus = () => {
  const history = useHistory();
  const [isloading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const transaction_id = localStorage.getItem("transaction_id");

  useEffect(() => {
    const getStatus = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:8080/payment/paymentStatus/${transaction_id}`
        );

        //check if status is success
        if (response?.data.status === "success") {
          setIsLoading(false);
          clearInterval(interval);
          clearTimeout(timeout);
          history.push("/success");
        }
        //check if status is failed
        else if (response.data.status === "failed") {
          setIsLoading(false);
          setErrorMessage("Payment failed");
          clearInterval(interval);
          clearTimeout(timeout);
        }
      } catch (error) {
        clearInterval(interval);
        clearTimeout(timeout);
        return error?.response;
      }
    };

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
      setErrorMessage("Payment failed");
      //   alert("Transaction took too long to complete, please try again in 5s");
      clearTimeout(timeout);
    }, 100000);

    const interval = setInterval(() => {
      getStatus();
    }, 2000);
  }, [transaction_id, history]);

  if (isloading) {
    return (
      <section className="container">
        <form
          action=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3>Processing</h3>
          <Spinner />
        </form>
      </section>
    );
  }

  return (
    <div>
      {errorMessage ? (
        <section className="container">
          <form
            action=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3 style={{ color: "#842029" }}>
              {errorMessage && "Payment Failed..."}
            </h3>
            <button onClick={() => history.push("/make-payment")}>Retry</button>
          </form>
        </section>
      ) : (
        <SuccessPage />
      )}
    </div>
  );
};

export default UpdateStatus;
