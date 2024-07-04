import { setUser } from "../store/slice/userSlice";
import { loginUser, signUpUser } from "./userAxios";

export const loginUserAction = (obj) => async (dispatch) => {
  const result = await loginUser(obj);

  dispatch(setUser(result));
};

export const signupUserAction = (obj, navigate) => async (dispatch) => {
  const { status, message } = await signUpUser(obj);
  console.log(status, message);

  // navigate to login page if status is success
  if (status === "success") {
    navigate("/signin");
  }
};
