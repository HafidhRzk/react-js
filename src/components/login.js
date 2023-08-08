import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        navigate("/dashboard")
      }
    } catch (error) {
      toast(error.response.data.error.message)
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
      <ToastContainer />
    </>
  );
}
