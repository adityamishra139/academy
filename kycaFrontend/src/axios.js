import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Your backend URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access - clearing session.");
      // Handle session clearing logic here if needed.
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
