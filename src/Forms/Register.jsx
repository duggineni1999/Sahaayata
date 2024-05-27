import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Forms.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    const emailPattern = /^[a-z0-9._%+-]+@(gmail|yahoo)\.com$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/;

    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Email must be a valid @gmail.com or @yahoo.com address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!passwordPattern.test(formData.password)) {
      errors.password = 'Password must be at least 4 characters long, contain one uppercase letter, one number, and one special character';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form');
    } else {
      console.log('Form submitted:', formData);
      toast.success('Registration successful!');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
      try {
        const response = await fetch("http://192.168.5.56:8089/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className='text-danger errormsg'>{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className='text-danger errormsg'>{errors.email}</span>}
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
        <div className="form-group">
          <label>Confirm Password:</label><br />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className='text-danger errormsg'>{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className="btn formbtn btn-primary mt-4">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
