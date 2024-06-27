import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserProfile() {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    phone_number: '',
    age: '',
    address: '',
    state: '',
    district: '',
    country: '',
    profilePicture: ''
  });

  const [errors, setErrors] = useState({});
  const [profilePicture, setProfilePicture] = useState(null);
  const [editField, setEditField] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://192.168.5.34:8000/user/${userId}`);
        setProfile(response.data);
        localStorage.setItem("userimage", response.data.profilePicture);
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Failed to load profile');
      }
    };

    fetchProfile();
  }, [userId]);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setProfile({ ...profile, [field]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);

      try {
        const response = await axios.put(`http://192.168.5.34:8000/user/${userId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: URL.createObjectURL(file)
        }));

        localStorage.setItem("userimage", response.data.profilePicture);
        toast.success('Profile picture updated successfully');
      } catch (error) {
        console.error('Error updating profile picture:', error);
        toast.error('Failed to update profile picture');
      }
    }
  };

  const handleSaveClick = async (field) => {
    if (validateField(field, profile[field])) {
      try {
        await axios.put(`http://192.168.5.34:8000/user/${userId}`, { [field]: profile[field] });
        toast.success(`${field} updated successfully`);
      } catch (error) {
        console.error(`Error updating ${field}:`, error);
        toast.error(`Failed to update ${field}`);
      }
    }
    setEditField(null);
  };

  const validateField = (field, value) => {
    let valid = true;
    const newErrors = {};

    switch (field) {
      case 'first_name':
        if (!value.trim()) {
          newErrors.first_name = 'First Name is required';
          valid = false;
        }
        break;
      case 'last_name':
        if (!value.trim()) {
          newErrors.last_name = 'Last Name is required';
          valid = false;
        }
        break;
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Email is invalid';
          valid = false;
        }
        break;
      case 'gender':
        if (!value.trim()) {
          newErrors.gender = 'Gender is required';
          valid = false;
        }
        break;
      case 'phone_number':
        if (!value.trim()) {
          newErrors.phone_number = 'Phone Number is required';
          valid = false;
        } else if (!/^\d{10}$/.test(value)) {
          newErrors.phone_number = 'Phone Number is invalid';
          valid = false;
        }
        break;
      case 'age':
        if (!value) {
          newErrors.age = 'Age is required';
          valid = false;
        } else if (value < 18 || value > 100) {
          newErrors.age = 'Age must be between 18 and 100';
          valid = false;
        }
        break;
      case 'address':
        if (!value.trim()) {
          newErrors.address = 'Address is required';
          valid = false;
        }
        break;
      case 'state':
        if (!value.trim()) {
          newErrors.state = 'State is required';
          valid = false;
        }
        break;
      case 'district':
        if (!value.trim()) {
          newErrors.district = 'District is required';
          valid = false;
        }
        break;
      case 'country':
        if (!value.trim()) {
          newErrors.country = 'Country is required';
          valid = false;
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, ...newErrors });
    return valid;
  };

  const handleEditClick = (field) => {
    setEditField(field);
  };

  return (
    <div className='container py-5'>
      <ToastContainer />
      <div className=''>
        <div className='mx-auto '>
          <div className='my-auto px-4 d-flex justify-content-center mb-4'>
            <input
              type="file"
              id="profilePictureUpload"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label className="image-wrapper">
              <img
                className='img-fluid px-3 py-3 image'
                src={profile.profilePicture}
                alt=""
                style={{ borderRadius: '50%', background: '#5AADDD', height: '250px', width: '250px', cursor: 'pointer' }}
              />
              <label htmlFor="profilePictureUpload">
                <div className="overlay">
                  <i className="image-icon fas fa-camera"></i>
                </div>
              </label>
            </label>
          </div>

          <div className='d-flex justify-content-center'>
            <div style={{ width: '720px' }}>
              <div className='container'>
                {[
                  { label: 'First Name', type: 'text', field: 'first_name', value: profile.first_name },
                  { label: 'Last Name', type: 'text', field: 'last_name', value: profile.last_name },
                  { label: 'Email', type: 'email', field: 'email', value: profile.email },
                  { label: 'Gender', type: 'text', field: 'gender', value: profile.gender },
                  { label: 'Phone number', type: 'number', field: 'phone_number', value: profile.phone_number },
                  { label: 'Age', type: 'number', field: 'age', value: profile.age },
                  { label: 'Address', type: 'text', field: 'address', value: profile.address },
                  { label: 'State', type: 'text', field: 'state', value: profile.state },
                  { label: 'District', type: 'text', field: 'district', value: profile.district },
                  { label: 'Country', type: 'text', field: 'country', value: profile.country },
                ].map((row, index) => (
                  <div className='row mb-3' key={index}>
                    <h6 className='col-4'>{row.label}:</h6>
                    <div className='col-8'>
                      {editField === row.field ? (
                        <div className='d-flex justify-content-between gap-3'>
                          <div className='d-flex w-100 gap-3'>
                            <input
                              className='form-control'
                              type={row.type}
                              value={row.value}
                              onChange={(e) => handleInputChange(e, row.field)}
                            />
                          </div>
                          <div className='my-auto'>
                            <button className='btn btn-danger px-2 py-0 mx-3' onClick={() => handleSaveClick(row.field)} style={{ borderRadius: '50%', height: '32px', width: '32px' }}>
                              <i className='fa-regular fa-floppy-disk'></i>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className='d-flex justify-content-between'>
                          {row.value}
                          <div>
                            <button className='btn btn-danger px-2 pt-1 mx-3' style={{ borderRadius: '50%', height: '32px', width: '32px' }} onClick={() => handleEditClick(row.field)}>
                              <i className='fa-solid fa-pen-to-square my-auto' style={{ fontSize: '15px' }}></i>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
