// const { default: axios } = require("axios");
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
  // "https://prayojon-server.prayojon.com",
});

export default axiosInstance;
