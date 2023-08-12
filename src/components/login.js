import React, { useContext, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Helmet } from 'react-helmet';
import SweetAlert from "./swal";

import { API } from '../config/api';

export default function Login() {
  const title = 'Login';

  let navigate = useNavigate();

  const [, dispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

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

      const response = await API.post('/auth/login', body, config);

      if (response?.status === 200) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data,
        });

        let message = response?.data?.message
        SweetAlert("notif", message, "success")

        navigate("/dashboard")
      }

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
      <h2>Login</h2>
      <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
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
          Login
        </Button>
      </Form>
      <p>
        Don't Have Any Account? Please <a href="/register">Register!</a>
      </p>
    </>
  );
}
