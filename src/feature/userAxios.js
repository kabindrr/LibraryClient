import { apiProcessor } from "../helpers/axiosHelper";

const url = "http://localhost:8010";

export const signUpUser = (obj) => {
  const axiosObj = {
    url,
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
