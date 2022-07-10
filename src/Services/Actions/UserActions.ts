import axios from "axios";
// import { GetUserState } from "./UserReducer";
const defaultsCommandsTypes = {
  CREATE_SUCCESS: "CREATE_SUCCESS",
  CREATE_FAIL: "CREATE_FAIL",
  UPDATE_SUCCESS: "UPDATE_SUCCESS",
  UPDATE_FAIL: "UPDATE_FAIL",
  DELETE_SUCCESS: "DELETE_SUCCESS",
  DELETE_FAIL: "DELETE_FAIL",
  GET_SUCCESS: "GET_SUCCESS",
  GET_FAIL: "GET_FAIL",
};

const UserActionToasts = {
  REGISTER_SUCCESS: { appearance: "success" },
  SINGON_UPDATE_SUCCESS: { appearance: "success" },
  REGISTER_FAIL: { appearance: "error" },
  SINGIN_SUCCESS: { appearance: "success" },
  SINGIN_FAIL: { appearance: "error" },
  SINGOUT_OUT: { appearance: "info" },
};

const createAction = ({ userState, props }: any) => {
  const { addToast } = props;
  debugger;
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/users", userState);
      dispatch({
        type: defaultsCommandsTypes.CREATE_SUCCESS,
        payload: { ...{ data }, ...props },
      });
      return (window.location.href = "/");
      //return props.navigate("/");
    } catch (error: any) {
      addToast(`app.messages.${error?.code}`, {
        appearance: "error",
        autoDismiss: true,
      });
      dispatch({ type: error.code, payload: { ...{}, ...props } });

      /*error.response.data.message
      if(error.code)
      addToast(TextOf(`app.messages.${error?.code}`), { appearance: 'error', autoDismiss: true })
      
      addToast(TextOf(`app.messages.${error?.response?.data?.message}`), { appearance: 'error', autoDismiss: true })
      dispatch({ type: UserActionTypes.SINGIN_FAIL, payload: { ...{}, ...props } });
      */
    }
  };
};

const getAllUsersByAction = ({ queryState, props }: any) => {
  const { addToast } = props;
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get("/users", queryState);
      dispatch({
        type: defaultsCommandsTypes.GET_SUCCESS,
        payload: { ...{ data }, ...props },
      });
    } catch (error: any) {
      addToast(`app.messages.${error?.response?.data?.message}`, {
        appearance: "error",
        autoDismiss: true,
      });
      dispatch({
        type: defaultsCommandsTypes.GET_FAIL,
        payload: { ...{}, ...error, ...props },
      });

      /*error.response.data.message
      if(error.code)
      addToast(TextOf(`app.messages.${error?.code}`), { appearance: 'error', autoDismiss: true })
      
      addToast(TextOf(`app.messages.${error?.response?.data?.message}`), { appearance: 'error', autoDismiss: true })
      dispatch({ type: UserActionTypes.SINGIN_FAIL, payload: { ...{}, ...props } });
      */
    }
  };
};

const getUsersByAction = async ({ queryState,setUsers,addToast, setLoading, page=1 }: any) => {
  
  try {
    const { data } = await axios.get(`/users?page=${page}&pageSize=4`, queryState);
    setUsers(data);
  } catch (error: any) {
    addToast(error?.code, { appearance: "error", autoDismiss: true });
  }
  setLoading(false)
  return;
};

const getUserByAction = async ({ queryState,setUser,addToast, setLoading, id }: any) => {
  
  try {
    const { data } = await axios.get(`/users/${id}`, queryState);
    setUser(data);
  } catch (error: any) {
    addToast(error?.code, { appearance: "error", autoDismiss: true });
  }
  setLoading(false)
  return;
};
export {
  getUserByAction,
  getUsersByAction,
  getAllUsersByAction,
  createAction,
  defaultsCommandsTypes,
  UserActionToasts,
};
