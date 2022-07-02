import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./Auth/Auth";
import Pages from "./Pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
