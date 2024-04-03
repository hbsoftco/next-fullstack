import axios from "axios";

const baseURL = process.env.BASE_URL;

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default axiosInstance;
