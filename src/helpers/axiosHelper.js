import axios from "axios";

// create function to read access and refresh JWT from session and local storage
const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessor = async (axiosObj) => {
  try {
    const { url, method, data, isPrivate, isRefresh } = axiosObj;

    // create a authorization header
    const headers = {
      Authorization: isPrivate
        ? isRefresh
          ? getRefreshJWT()
          : getAccessJWT()
        : null,
    };

    const result = await axios({
      url,
      method,
      data,
      headers,
    });

    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
