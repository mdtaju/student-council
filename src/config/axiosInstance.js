// const { default: axios } = require("axios");
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server-y29-p.applyversity.com",
  // "https://prayojon-server.prayojon.com",
});

export default axiosInstance;
