import { apiProcessor } from "../helpers/axiosHelper";
//const userEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/users";
const userEP = "http://localhost:8010/api/v1/users";

//signup user axios
export const signUpUser = (obj) => {
  const axiosObj = {
    url: userEP + "/signup",
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};

// login user axios
export const loginUser = (obj) => {
  const axiosObj = {
    url: userEP + "/login",
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};

// fetch user axios
export const fetchUser = () => {
  const axiosObj = {
    url: userEP + "/user-profile",
    method: "GET",
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};
