import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Replace with real API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default axiosConfig;
