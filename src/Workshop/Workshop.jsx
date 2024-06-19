import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const Workshop = () => {
  const [bodydata, setBodyData] = useState([]);
  const [heading, setHeading] = useState('');

  const fetchdata = useCallback(async () => {
    if (!heading) {
      console.error('No active heading found in localStorage');
      return;
    }

    try {
      const response = await axios.post(`http://192.168.5.34:8000/workshops/get`, { heading });
      console.log('Workshop data:', response.data);
      const content = response.data.map(workshop => workshop.content);
      setBodyData(content);
    } catch (error) {
      console.error('Error fetching workshop content:', error);
      // Handle error: Show a toast message or set an error state
    }
  }, [heading]);

  useEffect(() => {
    fetchdata();
  }, [heading, fetchdata]);

  useEffect(() => {
    const handleStorageChange = () => {
      const activeHeading = localStorage.getItem('activeHeading');
      setHeading(activeHeading);
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Polling for localStorage changes every second
    const interval = setInterval(() => {
      const activeHeading = localStorage.getItem('activeHeading');
      if (activeHeading !== heading) {
        setHeading(activeHeading);
      }
    }, 1000); // Check every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [heading]);

  return (
    <div className=''>
      {/* Render workshop content */}
      <div className='container py-5' dangerouslySetInnerHTML={{ __html: bodydata.join('') }} />
    </div>
  );
};

export default Workshop;
