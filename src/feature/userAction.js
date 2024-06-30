import { setUser } from "../store/slice/userSlice";
import { loginUser } from "./userAxios";

export const loginUserAction = (obj) => (dispatch) => {
  const result = loginUser(obj);

  dispatch(setUser(result));

  dispatch(setAllUser(result));
};
