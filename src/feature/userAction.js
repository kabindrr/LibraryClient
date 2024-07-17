import { setUser } from "../store/slice/userSlice";
import { fetchUser, loginUser, signUpUser } from "./userAxios";

// fetch user action
export const fetchUserAction = () => async (dispatch) => {
  const { status, message } = await fetchUser();

  // if success=> save user in redux store
  if (status === "success") {
    // dispatch(setUser(result));
  }
};

// login user action
export const loginUserAction = (obj) => async (dispatch) => {
  const { status, message, tokens } = await loginUser(obj);

  // if success=> save tokens in local and session storage
  if (status === "success") {
    localStorage.setItem("refreshJWT", tokens?.refreshJWT);
    sessionStorage.setItem("accessJWT", tokens?.accessJWT);

    // now dispatch fetch user profile action using the token as authorization
    dispatch(fetchUserAction());
  }
};

// signup user action
export const signupUserAction = (obj, navigate) => async (dispatch) => {
  const { status, message } = await signUpUser(obj);
  console.log(status, message);

  // navigate to login page if status is success
  if (status === "success") {
    navigate("/signin");
  }
};
