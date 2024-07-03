import { apiProcessor } from "../helpers/axiosHelper";
const userEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/users";

export const signUpUser = (obj) => {
  const axiosObj = {
    url: userEP,
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};

export const loginUser = (obj) => {
  const axiosObj = {
    url: userEP + "/login",
    method: "get",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
