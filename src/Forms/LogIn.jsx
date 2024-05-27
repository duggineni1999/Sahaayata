import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setFormData({
        email: '',
        password: ''
      });
     
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className='text-danger errormsg'>{errors.password}</span>}
        </div>
        <button type="submit" className="btn formbtn btn-primary mt-3">Login</button>
        <div className='d-flex mt-3 gap-1'>
        <p className='notregister'>Not Registered?</p>
        <Link to='/register'>
          <a href='#' className="notregisterd">Create an Account</a>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
