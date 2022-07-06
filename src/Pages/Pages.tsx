import { connect, Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Main/Footer";
import Header from "../Components/Main/Header";
import { SignOutAction } from "../Services/Actions/AuthAction";
import { getAllUsersByAction } from "../Services/Actions/UserActions";

import Home from "./Home/Home";
import MarketPlace from "./MarketPlace/MarketPlace";
import Operations from "./Operations/Operations";
import Orders from "./Orders/Orders";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";

const Pages = (props: any) => {
  const { user, signOut, getUsers } = props;
  if (!user.AuthReducer.isLogedIn) {
    window.location.href = "/auth";
    return <></>;
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header user={user.user} signOut={signOut} />
      <div className="row">
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <Routes>
            <Route path="/" element={<Home user={user.user} />} />
            <Route path="/orders" element={<Orders user={user.user} />} />
            <Route
              path="/market-place"
              element={<MarketPlace user={user.user} />}
            />
            <Route
              path="/users"
              element={<Users user={user.user} getUsers={getUsers} />}
            />
            <Route
              path="/operations"
              element={<Operations user={user.user} />}
            />
            <Route path="/settings" element={<Settings user={user.user} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signOut: (props: any) => {
      dispatch(SignOutAction({ props }));
    },
    getUsers: (queryState: any, props: any) => {
      dispatch(getAllUsersByAction({ queryState, props }));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pages);

//export default Pages;
