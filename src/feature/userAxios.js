import { apiProcessor } from "../helpers/axiosHelper";

const url = "http://localhost:8010";
// const userEP = url + "/api/v1/users";

export const signUpUser = (obj) => {
  const axiosObj = {
    url,
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};

export const loginUser = (obj) => {
  const axiosObj = {
    url,
    method: "get",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
