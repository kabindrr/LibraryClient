import "./App.css";
import { StudentRegister } from "./components/StudentRegister";
import { StudentLogin } from "./components/StudentLogin";
import { Route, Routes } from "react-router-dom";
import EmailVerify from "./components/EmailVerify";
import MulterUpload from "./components/MulterUpload";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MulterUpload />} />

        <Route path="/signin" element={<StudentLogin />} />

        <Route path="/signup" element={<StudentRegister />} />

        <Route path="/verify-email" element={<EmailVerify />} />
      </Routes>
    </>
  );
};

export default App;
