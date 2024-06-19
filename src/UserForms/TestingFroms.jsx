import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Forms = () => {
  const location = useLocation();
  const [heading, setHeading] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const headingParam = params.get('heading');
    setHeading(headingParam);
  }, [location]);

  return (
    <div>
      <h1>{heading ? `Heading: ${heading}` : 'No Heading Provided'}</h1>
      {/* Your component code here */}
    </div>
  );
};

export default Forms;
