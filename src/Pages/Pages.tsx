import {  Route, Routes } from "react-router-dom";
import Footer from "../Components/Main/Footer";
import Header from "../Components/Main/Header";
import Home from "./Home/Home";
import MarketPlace from "./MarketPlace/MarketPlace";
import Operations from "./Operations/Operations";
import Orders from "./Orders/Orders";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";

const Pages = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <div className="row">
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/market-place" element={<MarketPlace />} />
            <Route path="/users" element={<Users />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pages;
