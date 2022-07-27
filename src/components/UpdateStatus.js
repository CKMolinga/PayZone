import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UpdateStatus = () => {
  const history = useHistory();
  const [isloading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const transaction_id = localStorage.getItem("transaction_id");

  const getStatus = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/payment/paymentStatus/${transaction_id}`
      );

      //check if status is success
      //   if (response?.data.status === "success") {
      //     setIsLoading(false);
      //     clearInterval(interval);
      //     clearTimeout(timeout);
      //     history.push("/success");
      //   }
      //     //check if status is failed
      //     else if (response.data.status === "failed") {
      //         setIsLoading(false);
      //         setErrorMessage("Payment failed");
      //         alert("Payment failed");
      //         clearInterval(interval);
      //         clearTimeout(timeout);
      //     }
    } catch {
      // clearInterval(interval);
      // clearTimeout(timeout);
      // return error?.response
    }
  };
  return <div></div>;
};

export default UpdateStatus;
