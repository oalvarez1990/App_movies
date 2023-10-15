import axios from "axios";

export const axiosConfiguration = axios.create({
  baseURL: process.env.BASE_URL_REACT || "http://localhost:8080/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
