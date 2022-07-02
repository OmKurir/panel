import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./Actions/store";
import "./App.css";
import Auth from "./Auth/Auth";
import Pages from "./Pages/Pages";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<Pages />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
