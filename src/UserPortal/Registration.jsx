import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [userDetails, setUserDetails] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isadmin: false, // Assuming default is non-admin
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

    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://192.168.5.34:8000/register', userDetails);
      if (response.data.message) {
        toast.success('User registered successfully');
        setUserDetails({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: '',
          isadmin: false,
        });
        // Redirect or perform other actions after successful registration
      } else {
        toast.error(response.data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error(error.response.data.error || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className='my-5'>
      <Container>
        <Row className="justify-content-md-center py-4">
          <Col md={6}>
            <h2>Registration</h2>
            <Form className='mt-5' onSubmit={handleSubmit}>
              <ToastContainer />
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  className='mb-3'
                  name="first_name"
                  value={userDetails.first_name}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  className='mb-3'
                  name="last_name"
                  value={userDetails.last_name}
                  onChange={handleChange}
                  placeholder="Enter last name"
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
                  <p>If you are already registered, please login here.</p>
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
