import axios from "axios";

export default axios.create({
  baseURL: "https://activeserver.onrender.com/notepad",
  // baseURL: "http://localhost:5000/notepad",
});
