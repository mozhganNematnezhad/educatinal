import { toast } from "react-toastify";

export const toastifuySuccess = (message) => {
  return toast.success(`${message}`, {
    position: "top-left",
    closeOnClick: true,
    autoClose: 800,
  });
};


export const toastifuyErr = (message) => {
  return toast.error(`${message}`, {
    position: "top-left",
    closeOnClick: true,
    autoClose: 800,
  });
};

