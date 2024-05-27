import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '', 
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://192.168.5.56:8089/register', userDetails);
      if (response.data.success) {
        toast.success(response.data.message);
        setUserDetails({
          username: '',
          email: '',
          password: '',
          confirmPassword: '', 
        });
        // Redirect or perform other actions after successful registration
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='my-5'>
      <Container>
        <Row className="justify-content-md-center py-4">
          <Col md={6}>
            <h2>User Registration</h2>
            <Form className='mt-5' onSubmit={handleSubmit}>
              <ToastContainer />
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  className='mb-3'
                  name="username"
                  value={userDetails.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
              
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className='mb-3'
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
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
                  required
                />
              </Form.Group>
              
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  className='mb-3'
                  name="confirmPassword"
                  value={userDetails.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group>

              <div className='d-flex justify-content-center'>
                <Button className='w-50 mt-3' variant="primary" type="submit">
                  Register
                </Button>
              </div>
              <div className='d-flex justify-content-center my-4'>
                <Link to='/user-login'>
                  <p>If You Already Registered Please Login</p>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
