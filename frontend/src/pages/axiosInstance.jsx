import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.REACT_APP_BACKEND_URL ||
    "https://autorentals-production.up.railway.app/",
});

export default axiosInstance;
