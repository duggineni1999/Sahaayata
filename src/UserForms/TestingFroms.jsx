import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import axios from 'axios';

const TestingForms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null); // State for photo preview

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile); // Store selected file
    setPhotoPreview(URL.createObjectURL(selectedFile)); // Generate preview (optional)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('photo', photo); // Append photo to FormData
    for (const [key, value] of formData.entries()) {
       console.log(`${key}: ${value}`);
      } 

    try {
      const response = await axios.post('http://localhost:5000/api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });
      setMessage(response.data.message); // Display success message
      setName('');
      setEmail('');
      setPhoto(null);
      setPhotoPreview(null); // Clear preview after successful submission
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong'); // Handle errors
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Photo:
          <input type="file" onChange={handlePhotoChange} />
          {photoPreview && <img src={photoPreview} alt="Photo preview" />}
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};


export default TestingForms;
