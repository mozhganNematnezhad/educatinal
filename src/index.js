import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// import context
import CartItemsState from "Context/CartItemsContext/CartItemsState";
import AuthState from "Context/AuthContext/AuthState";
import AllDataState from "Context/AllData/AllData";
import ThemeState from "Context/Theme/ThemeState";
// import admin
import AuthStateAdmin from "Context/Admin/AuthAdmin/AuthStateAdmin";

// import css
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";
import "./Assets/styles/ReactToastfuyStyle.css";

import "./index.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeState>
    <AuthStateAdmin>
      <AuthState>
        <AllDataState>
          <CartItemsState>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartItemsState>
        </AllDataState>
      </AuthState>
    </AuthStateAdmin>
  </ThemeState>
);

