import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate =useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
        toast.warning('Please fill out all fields');
        return;
      }
      else{
        try {
            const response = await axios.post('http://localhost:8000/login', userDetails, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            toast.success("Successfully login")
            localStorage.setItem('token', response.data.accessToken);
            navigate("/");
            // Resetting form values
            setUserDetails({
              email: '',
              password: '',
            });
          } catch (error) {
            toast.error("Invalid Credentials",error)
            console.error('Error:', error);
          }

      }
    
  };

  return (
    <div className='my-5'>

   
    <Container>
      <Row className="justify-content-md-center py-5">
        <Col md={6}>
          <h2>User Login</h2>
          <Form onSubmit={handleSubmit}>
            <ToastContainer />
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className='mb-3'
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className='mb-3'
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <div className='d-flex justify-content-center'>
                <Button className='w-50 mt-3' variant="primary" type="submit">
                    Login
                </Button>
            </div>
            <div className=' d-flex justify-content-center my-4'>
                <Link to='/user-registration'><p>If you Not Registered, Please Register</p></Link>
            </div>
            
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Login;
