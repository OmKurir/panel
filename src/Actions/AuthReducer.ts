import axios from "axios";
import { AuthActionToasts, AuthActionTypes } from "../Actions/AuthAction";
const STORAGE_KEY = "00xvtpkbnb2ah";
const dafaultState = {
  isLogedIn: false,
  stayIfAuth: () => {
    window.location.href = "/";
  },
  accessToken: null,
  user: {
    name: "",
    email: "",
    id: "",
    roles: [],
  },
};

const GetAuthState = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    const auth = JSON.parse(data ?? "");
    if (auth) {
      const { accessToken, roles } = auth;

      axios.defaults.headers.common["Authorization"] = accessToken;
      return {
        isLogedIn: true,
        user: auth,
        accessToken,
        roles,
        stayIfAuth: () => {
          if (!auth.isLogedIn) window.location.href = "/";
        },
      };
    }
    
    return dafaultState;
  } catch (error) {
    return dafaultState;
  }
};
const defaultToaster = (m: string, t: any) => alert(m);

const AuthReducer = (state: any = GetAuthState(), action: any) => {
  debugger;
  const domLoading = (b: boolean) => b;
  const {
    data: payload,
    errors,
    addToast = defaultToaster,
    setLoading = domLoading,
  } = action.payload ?? {};
  const message = `app.messages.${action.type.toLowerCase()}`;
  let newState = state;
  debugger
  switch (action.type) {
    case AuthActionTypes.SINGIN_FAIL:
      addToast(message, { appearance: "info", autoDismiss: true });
      localStorage.removeItem(STORAGE_KEY);
      break;

    case AuthActionTypes.SINGIN_SUCCESS:
      addToast(message, { appearance: "success", autoDismiss: true });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      newState = {
        isLogedIn: true,
        user: payload,
      };
      break;
    case AuthActionTypes.FORGOT_PASSWORD_SUCCESS:
      addToast(message, { appearance: "success", autoDismiss: true });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      newState = {
        isLogedIn: true,
        user: payload,
      };
      break;

    case AuthActionTypes.RESET_PASSWORD_SUCCESS:
      if (Array.isArray(errors))
        errors.forEach((error: any) => {
          addToast(`${error.message}`, {
            appearance: "error",
            autoDismiss: true,
          });
        });
      else
        addToast(`Error, please contact he system Admin: ${errors}`, {
          appearance: "error",
          autoDismiss: true,
        });

      break;

    case AuthActionTypes.SINGIN_SUCCESS:
      addToast(message, { appearance: "success", autoDismiss: true });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      newState = {
        isLogedIn: true,
        user: payload,
      };

      break;


    case 'ERR_NETWORK':
      addToast(message, { appearance: "error", autoDismiss: true });
      
      break;
    default:
      // return dafaultState;
      break;
  }
  setLoading(false);
  return newState;
};
export { GetAuthState , };
export default AuthReducer;