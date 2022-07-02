import axios from "axios";
// import { GetAuthState } from "./AuthReducer";

const AuthActionTypes = {
  SINGIN_SUCCESS: "SINGIN_SUCCESS",
  SINGIN_FAIL: "SINGIN_FAIL",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAIL: "FORGOT_PASSWORD_FAIL",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAIL: "RESET_PASSWORD_FAIL",
  
};
const AuthActionToasts = {
  REGISTER_SUCCESS: { appearance: "success" },
  SINGON_UPDATE_SUCCESS: { appearance: "success" },
  REGISTER_FAIL: { appearance: "error" },
  SINGIN_SUCCESS: { appearance: "success" },
  SINGIN_FAIL: { appearance: "error" },
  SINGOUT_OUT: { appearance: "info" },
};

const SingInAction = ({userState, props}: any) => {
  const { addToast } = props;
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_in", userState);
      axios.defaults.headers.common["Authorization"] = data.accessToken;
      dispatch({
        type: AuthActionTypes.SINGIN_SUCCESS,
        payload: { ...{ data }, ...props },
      });
      return props.navigate("/");
    } catch (error: any) {
      if (error?.response?.status === 0) {
        addToast(`app.messages.${error?.code}`, {
          appearance: "error",
          autoDismiss: true,
        });
        dispatch({ type: error.code, payload: { ...{}, ...props } });
      } else {
        addToast(`app.messages.${error?.response?.data?.message}`, {
          appearance: "error",
          autoDismiss: true,
        });
        dispatch({
          type: AuthActionTypes.SINGIN_FAIL,
          payload: { ...{}, ...error, ...props },
        });
      }
      /*error.response.data.message
      if(error.code)
      addToast(TextOf(`app.messages.${error?.code}`), { appearance: 'error', autoDismiss: true })
      
      addToast(TextOf(`app.messages.${error?.response?.data?.message}`), { appearance: 'error', autoDismiss: true })
      dispatch({ type: AuthActionTypes.SINGIN_FAIL, payload: { ...{}, ...props } });
      */
    }
  };
};
const ForgotPasswordAction = ({userState, props}: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch({
       // type: AuthActionTypes.SINGOUT_OUT,
        payload: { ...{}, ...props },
      });
      window.location.reload();
      return props.navigate("/");
    } catch (error: any) {
      console.error(error);
    }
  };
};
const ResetPasswordAction = ({userState, props}: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_on", userState);
      debugger;
      axios.defaults.headers.common["Authorization"] = data.accessToken;
      if (data?.errors?.length > 0) throw data.errors;
      dispatch({
        //type: AuthActionTypes.REGISTER_SUCCESS,
        payload: { data, ...props },
      });
      return props.navigate("/mykurir");
    } catch (errors: any) {
      console.error(errors);
      dispatch({
        //type: AuthActionTypes.REGISTER_FAIL,
        payload: { errors, ...props },
      });
    }
  };
};

export {
  SingInAction,
  ResetPasswordAction,
  ForgotPasswordAction,
  AuthActionTypes,
  AuthActionToasts,
};