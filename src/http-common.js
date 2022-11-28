import axios from "axios";export default axios.create({
    baseURL: "http://140.115.220.170:3000/api",
    headers: {
      "Content-type": "application/json"
    }
  });