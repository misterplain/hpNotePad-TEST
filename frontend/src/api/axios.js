import axios from "axios";

export default axios.create({
  baseURL: "https://hpnotepad-api.onrender.com",
  // baseURL: "http://localhost:5000",
});
