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




// *****************************
// *****************************
// *****************************
// *****************************

// course ====دوره -ترم
// lesson=== درس
// یک دوره چند درس دارد


// *****************************
// *****************************
// *****************************
// *****************************

// AuthState
// بالای همه باشد بهتر است

// زمانی ما به یه کانتکش دسترسی داریم که اونو در واقع در یه شاخه بالاترش
// رندر شده باشه
// نمیتونیم مستقیما همون جا
// رندر بنویسم و همون جا
// بیایم به مقادیر داخلش
//  دسترسی داشته باشیم
// الان اومدیم یه شاخه بالاترش
// یعنی در
// index.js
// میتونیم به این مقادیر دسترسی داشته باشیم
// ولی
// AllDataState
// الان ما داخل App
// گزاشتیم





// Absoulote path
// توی روت پروژه یه فایل
// js.config.json
// باید بزاریم

// اونایی که فایل کنار فایل هست نیازی نیست
//اونایی که چندلایه بالاتر هستند
// ../../.././..
// یعنی نقطه های بیشتری دارند اونا رو باید بزاریم
// دونقطه های طولانی تر نمیتویسم

// روت اصلی و پایه من میشه همین
// src

