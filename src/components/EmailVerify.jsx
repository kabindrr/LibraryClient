import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { emailVerifyAxios } from "../feature/userAxios";

const EmailVerify = () => {
  const [response, setResponse] = useState();

  const [searchParams] = useSearchParams();
  const ukey = searchParams.get("ukey");
  const e = searchParams.get("e");

  useEffect(() => {
    const handleOnVerify = async () => {
      const verifyObj = { ukey, e };
      const res = await emailVerifyAxios(verifyObj);
      res && setResponse(res);
    };

    handleOnVerify();
  }, [e, ukey]);

  // const handleOnVerify = async () => {
  //   const verifyObj = { ukey, e };
  //   const res = await emailVerifyAxios(verifyObj);
  //   res && setResponse(res);
  // };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      {/* {response?.status === "success" ? (
        <div>
          <h1>Account Verified, Login Now</h1>
          <Link to={"/signin"}>
            <Button variant="primary">Login Now</Button>
          </Link>
        </div>
      ) : (
        <Button variant="warning" onClick={handleOnVerify}>
          Verify Now
        </Button>
      )} */}

      {response?.status === "success" ? (
        <div>
          <h1>Account Verified, Login Now</h1>
          <Link to={"/signin"}>
            <Button variant="primary">Login Now</Button>
          </Link>
        </div>
      ) : (
        <Spinner variant="warning" />
      )}
    </div>
  );
};

export default EmailVerify;
