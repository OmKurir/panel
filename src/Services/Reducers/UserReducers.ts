import { defaultsCommandsTypes } from "../Actions/UserActions";
const { CREATE_SUCCESS, GET_SUCCESS } = defaultsCommandsTypes;

const UserReducers = (state: any = {}, action: any) => {
  const domLoading = (b: boolean) => b;
  const { setLoading = domLoading } = action.payload ?? {};

  switch (action.type) {
    case CREATE_SUCCESS:
      break;

    case GET_SUCCESS:
      break;
  }
  setLoading(false);
  return action.payload ?? {};
};
export default UserReducers;
