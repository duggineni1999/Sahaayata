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
      const response = await axios.post(`http://192.168.5.34:8000/workshops`, { heading });
      console.log('Workshop data:', response.data);
      const content = response.data.map(workshop => workshop.content);
      setBodyData(content);
    } catch (error) {
      console.error('Error fetching workshop content:', error);
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
    // If heading is changed within the same document context
    const interval = setInterval(() => {
      const activeHeading = localStorage.getItem('activeHeading');
      if (activeHeading !== heading) {
        setHeading(activeHeading);
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [heading]);

  return (
    <div className=''>
      
      <div className='container py-5' dangerouslySetInnerHTML={{ __html: bodydata.join('') }} />
    </div>
  );
};

export default Workshop;
