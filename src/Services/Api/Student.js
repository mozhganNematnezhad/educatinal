import { create } from "axios";
import { toast } from "react-toastify";

const SERVER_URL = "http://localhost:5000/api";

export const API = create({
  baseURL: SERVER_URL,
});

API.interceptors.request.use((request) => {
  const token = localStorage.getItem("user-token");
  request.headers["x-auth-token"] = token;
  return request;
  // console.log("test");
});

