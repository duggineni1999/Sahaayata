import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginSuccess } from '../authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem('rememberedDetails'));

    if (storedDetails) {
      setUserDetails({
        email: storedDetails.email,
        password: storedDetails.password,
      });
      setRememberMe(storedDetails.ischecked);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      toast.warning('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post('http://192.168.5.34:8000/login', userDetails, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch(loginSuccess(response.data.accessToken));
      // Save credentials to localStorage if Remember Me is checked
      if (rememberMe) {
        const userRememberDetails = {
          email: userDetails.email,
          password: userDetails.password,
          ischecked: rememberMe
        }
        localStorage.setItem('rememberedDetails', JSON.stringify(userRememberDetails));
      } else {
        localStorage.removeItem('rememberedDetails');
      }

      localStorage.setItem('token', response.data.accessToken);
      navigate('/');
      
      // Reset form values
      setUserDetails({
        email: '',
        password: '',
      });

    } catch (error) {
      toast.error('Invalid Credentials');
      console.error('Error:', error);
    }
  };

  return (
    <div className='my-5'>
      <Container>
        <Row className="justify-content-md-center py-5">
          <Col md={6}>
            <h2>Login</h2>
            <Form className='mt-5' onSubmit={handleSubmit}>
              <ToastContainer />
              <Form.Group controlId="formemail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
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

              <Form.Group controlId="formRememberMe">
                <Form.Check
                  type="checkbox"
                  label="Remember Me"
                  checked={rememberMe}
                  onChange={handleRememberMe}
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
