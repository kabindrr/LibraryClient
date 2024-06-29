import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { signUpUser } from "../feature/userAxios";

const initialState = {
  fName: null,
  lName: null,
  email: null,
  phone: null,
  password: null,
  confirmPassword: null,
};

export const StudentRegister = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return window.alert("Password do not match");
    }
    const result = await signUpUser(rest);
    console.log(result);
  };
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ maxHeight: "100vh" }}
      >
        <Form className="mt-3 custom-form" onSubmit={handleOnSubmit}>
          <h1 className="text-center">Student Registration Form</h1>
          <Form.Group
            className="mb-3 text-center"
            controlId="formGroupFirstName"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="fName"
              placeholder="Enter your First Name"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-center"
            controlId="formGroupLastName"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lName"
              placeholder="Enter your Last Name"
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your Email address"
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formGroupPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="Enter your Phone Number"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-center"
            controlId="formGroupPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your Password "
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-center"
            controlId="formGroupConfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password "
              required
              onChange={handleOnChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="btn-custom ">
              Register Me
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
