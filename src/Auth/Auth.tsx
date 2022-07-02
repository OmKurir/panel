import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import LogIn from "./LogIn";
import ResetPassword from "./ResetPassword";

import { connect } from "react-redux";

import {
  ForgotPasswordAction,
  ResetPasswordAction,
  SingInAction,
} from "../Actions/AuthAction";

const Auth = ({ singIn, forgotPassword, resetPassword }: any) => {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              Vertically centered hero sign-up form
            </h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <Routes>
              <Route path="/" element={<LogIn singIn={singIn} />} />
              <Route path="login" element={<LogIn singIn={singIn} />} />
              <Route path="/forgot-password" element={<ForgotPassword forgotPassword={forgotPassword}/>} />
              <Route path="/reset-password" element={<ResetPassword resetPassword={resetPassword} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    singIn: (userState: any, props: any) => {
      dispatch(SingInAction({ userState, props }));
    },
    forgotPassword: (userState: any, props: any) => {
      dispatch(ForgotPasswordAction({ userState, props }));
    },
    resetPassword: (userState: any, props: any) => {
      dispatch(ResetPasswordAction({ userState, props }));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
//export default Auth;
