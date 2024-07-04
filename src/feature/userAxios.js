import { apiProcessor } from "../helpers/axiosHelper";
//const userEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/users";
const userEP = "http://localhost:8010/api/v1/users";
console.log(userEP);

export const signUpUser = (obj) => {
  const axiosObj = {
    url: userEP + "/signup",
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};

export const loginUser = (obj) => {
  const axiosObj = {
    url: userEP + "/login",
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
