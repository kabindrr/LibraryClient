import React from "react";
import { useSearchParams } from "react-router-dom";

const EmailVerify = () => {
  const [searchParams] = useSearchParams();
  const ukey = searchParams.get("ukey");
  const e = searchParams.get("e");

  console.log(ukey, e);
  return <div>EmailVerify</div>;
};

export default EmailVerify;
