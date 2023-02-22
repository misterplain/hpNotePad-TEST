import axios from "axios";

console.log('xxx')

export default axios.create({
  baseURL: "https://activeserver.onrender.com/notepad",
  // baseURL: "http://localhost:5000/notepad",
});
