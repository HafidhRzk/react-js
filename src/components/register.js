import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export default function register() {
  return (
    <>
      <h2>Register</h2>
      <Form>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextFirstname"
        >
          <Form.Label column sm="2">
            Firstname
          </Form.Label>
          <Col sm="10">
            <Form.Control type="string" placeholder="Firstname" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastname">
          <Form.Label column sm="2">
            Lastname
          </Form.Label>
          <Col sm="10">
            <Form.Control type="string" placeholder="Lastname" />
          </Col>
        </Form.Group>

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
        Register
      </Button>
      <p>
        Already Have An Account? Please <a href="/login">Login!</a>
      </p>
    </>
  );
}
