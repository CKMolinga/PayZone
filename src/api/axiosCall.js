import axios from "axios";

export const initiatePayment = axios.create({
  baseURL: "http://localhost:8080",
});
