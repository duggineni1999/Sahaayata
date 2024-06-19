import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPortal() {
  const editor = useRef(null);
  const navigate = useNavigate()
  const [content, setContent] = useState('');
  const [workshopHeading, setWorkshopHeading] = useState('');

  const config = {
    uploader: {
      insertImageAsBase64URI: true,
      imagesExtensions: ['jpg', 'jpeg', 'png']
    },
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };

  const fetchContentByHeading = async () => {
    if (!workshopHeading) {
      toast.warning('Please enter a heading to load content');
      return;
    }

    try {
      const response = await axios.post('http://192.168.5.34:8000/workshops/get', { heading: workshopHeading }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.length > 0) {
        setContent(response.data[0].content);
        toast.success('Content loaded');
      } else {
        toast.error('No content found for the given heading');
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      toast.error('Failed to fetch content');
    }
  };
  const gotoForms =()=>{
    navigate('/booking')
    
  }

  const handleSubmit = async () => {
    const data = {
      heading: workshopHeading,
      content: content
    };
    console.log("data", data);

    if (workshopHeading === "" || content === "") {
      toast.warning('Please fill required fields');
    } else {
      try {
        const response = await axios.post('http://192.168.5.34:8000/workshop', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        toast.success('Data successfully stored in the database');
        // Optionally reset form fields after successful submission
        setWorkshopHeading('');
        setContent('');
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to store data in the database');
      }
    }
  };

  return (
    <div className='container py-5'>
      <div className='mb-5'>
        <label className='form-label' htmlFor="workshopheading">Workshop</label>
        <input
          id="workshopheading"
          className='form-control'
          type="text"
          placeholder='Workshop Heading'
          value={workshopHeading}
          onChange={(e) => setWorkshopHeading(e.target.value)}
        />
        <div className='d-flex justify-content-between'>
            <button onClick={fetchContentByHeading} className="btn btn-secondary mt-3">Load Content</button>
            <button onClick={gotoForms} className="btn btn-secondary mt-3"> Create Forms</button>
        </div>
        
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        // onChange={newContent => setContent(newContent)}
      />
      <button onClick={handleSubmit} className="btn btn-primary mt-3">Submit</button>
      <ToastContainer />
    </div>
  );
}

export default AdminPortal;
