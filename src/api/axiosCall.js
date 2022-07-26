import axios from "axios";

export const processPayment = axios.create({
  baseURL: "http://localhost:8080",
});
