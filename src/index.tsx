import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import axios from "axios";
import { ToastProvider } from "react-toast-notifications";


const {REACT_APP_BASE_URL_API, REACT_APP_API_KEY} = process.env
axios.defaults.baseURL = `https://4000-omkurir-server-ivu6g5b1kpz.ws-eu53.gitpod.io/api/v2/`;
axios.defaults.headers.common["apikey"] = REACT_APP_API_KEY??'';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider autoDismissTimeout={5000} transitionDuration={500}>
      <App />
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
