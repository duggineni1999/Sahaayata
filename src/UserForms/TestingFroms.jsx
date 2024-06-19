import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import DisplayFormData from './Forms'; // Adjust the import path as necessary
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
  const location = useLocation();
  const [heading, setHeading] = useState('');
  const [formData, setFormData] = useState(null);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const headingParam = params.get('heading');
    setHeading(headingParam);
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      if (heading) {
        try {
          const response = await axios.get('http://192.168.5.34:8000/form-data', {
            params: { heading }
          });

          if (response.data.length === 0) {
            setNoData(true);
            setFormData(null);
          } else {
            setFormData(response.data);
            setNoData(false);
          }
        } catch (error) {
          console.error('Failed to fetch form data:', error);
          toast.error('Failed to fetch form data');
          setNoData(true);
        }
      }
    };

    fetchData();
  }, [heading]);

  return (
    <div className='container'>
      <ToastContainer />
      <h1>{heading ? `Heading: ${heading}` : 'No Heading Provided'}</h1>
      {noData ? (
        <p>No data is available</p>
      ) : (
        formData && <DisplayFormData formData={formData} />
      )}
    </div>
  );
};

export default Forms;
