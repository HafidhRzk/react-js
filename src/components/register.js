import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Helmet } from 'react-helmet';
import { API } from '../config/api';
import SweetAlert from "./swal";

export default function Register() {
  const title = 'Register';

  let navigate = useNavigate();

  const [form, setForm] = useState({
    userName: "",
    email: '',
    password: '',
  });

  const { userName, email, password } = form;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post('/auth/register', body, config);

      if (response?.status === 200) {
        let message = response?.data?.message
        SweetAlert("notif", message, "success")

        navigate("/login")
      }

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

    } catch (error) {
      let message = error?.response?.data?.message || error?.message
      SweetAlert("notif", message, "error")
    }
  });

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control type="string" placeholder="Username" onChange={handleOnChange} value={userName} name="userName" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="Email" onChange={handleOnChange} value={email} name="email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" onChange={handleOnChange} value={password} name="password" />
          </Col>
        </Form.Group>
        <Button type="submit" className="mb-3 button" variant="outline-light">
          Register
        </Button>
      </Form>
      <p>
        Already Have An Account? Please <a href="/login">Login!</a>
      </p>
    </>
  );
}
