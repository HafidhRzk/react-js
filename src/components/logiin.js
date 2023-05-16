import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export default function login() {
  return (
    <>
      <h2>Login</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form>
      <Button className="mb-3 button" variant="outline-light">
        Login
      </Button>
      <p>
        Don't Have Any Account? Please <a href="/register">Register!</a>
      </p>
    </>
  );
}
