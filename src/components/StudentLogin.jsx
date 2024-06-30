import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../feature/userAxios";
import { loginUserAction } from "../feature/userAction";

const initialState = {
  email: null,
  password: null,
};
export const StudentLogin = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.prevantDefault();
    dispatch(loginUserAction(form));
  };

  return (
    <div className="login-container">
      <div className="login-form ">
        <Form onSubmit={handleOnSubmit}>
          <h2>Student Login Portal</h2>
          <div className="form-group">
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleOnChange}
              />
            </Form.Group>
          </div>
          <div className="form-group">
            <Form.Group
              className="mb-3 text-center"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your Password"
                onChange={handleOnChange}
              />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
