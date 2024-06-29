import React from "react";
import { Button, Form } from "react-bootstrap";

export const StudentLogin = () => {
  return (
    <div className="login-container">
      <div className="login-form ">
        <Form>
          <h2>Student Login Portal</h2>
          <div className="form-group">
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </div>
          <div className="form-group">
            <Form.Group
              className="mb-3 text-center"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
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
