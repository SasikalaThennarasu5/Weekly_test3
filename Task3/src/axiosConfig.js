import axios from "axios";

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://your-backend.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
