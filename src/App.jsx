import "./App.css";
import { StudentRegister } from "./components/StudentRegister";
import { StudentLogin } from "./components/StudentLogin";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<StudentLogin />} />

        <Route path="/signup" element={<StudentRegister />} />
      </Routes>
    </>
  );
};

export default App;
