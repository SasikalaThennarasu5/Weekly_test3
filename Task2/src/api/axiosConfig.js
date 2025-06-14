import axios from "axios";

export const API_BASE = "https://jsonplaceholder.typicode.com";

const axiosConfig = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default axiosConfig;
