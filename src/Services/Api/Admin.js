// import axios from "axios";
import { create } from "axios";
import { toast } from "react-toastify";



const SERVER_URL = "http://localhost:5000/api";

export const API = create({
  baseURL: SERVER_URL,
});



// admin
API.interceptors.request.use((request) => {
  // console.log("request", request);
  // alert("admin-token")
  const token = localStorage.getItem("admin-token");
  request.headers["x-auth-token"] = token;
  return request;
  // console.log("test");
});




API.interceptors.response.use((response) => response,
  (err) => {
    if ([401, 403].includes(err.response.status)){
      localStorage.removeItem("admin-token");

      window.location.replace("/admindashboard/login");
    }

  //   const expectedErrors =
  //   err.response &&
  //   err.response.status >= 400 &&
  //   err.response.status < 500
  //   if (!expectedErrors) {
  //     // console.log("error",error);
  //     toast.error("مشکلی از سمت سرور رخ داده است", {
  //         position: "top-right",
  //         closeOnClick: true
  //     });
  // }


    return Promise.reject(err);
  }
);




