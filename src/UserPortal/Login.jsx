import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: '',
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

    try {
      const response = await axios.post('http://192.168.5.56:8089/login', userDetails);
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token);
        navigate("/");
        // Resetting form values
        setUserDetails({
          email: '',
          password: '',
        });
        
        // Redirect to a protected route
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='my-5'>
      <Container>
        <Row className="justify-content-md-center py-5">
          <Col md={6}>
            <h2>User Login</h2>
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

              <div className='d-flex justify-content-center'>
                <Button className='w-50 mt-3' variant="primary" type="submit">
                  Login
                </Button>
              </div>
              <div className='d-flex justify-content-center my-4'>
                <Link to='/user-registration'><p>If you are not registered, please register</p></Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
