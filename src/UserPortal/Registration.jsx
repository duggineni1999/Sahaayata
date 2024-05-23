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
    if (!userDetails.first_name || !userDetails.last_name || !userDetails.email || !userDetails.password) {
        toast.warning('Please fill out all fields');
        return;
      }
      else{
        try {
            const response = await axios.post('http://localhost:8000/register', userDetails, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            toast.success("Registered Succesfully");
            console.log('Success:', response.data);
      
            // Resetting form values
            setUserDetails({
              first_name: '',
              last_name: '',
              email: '',
              password: '',
            });
          } catch (error) {
              toast.warning("You got error While Registering",error)
            console.error('Error:', error);
          }

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
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control className='mb-3'
                type="text"
                name="first_name"
                value={userDetails.first_name}
                onChange={handleChange}
                placeholder="Enter first name"
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
                    Register
                </Button>
            </div>
            <div className=' d-flex justify-content-center my-4'>
                <Link to='/user-login'><p>If You Already Login Please Login</p></Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Registration;
