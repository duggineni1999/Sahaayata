import React from 'react';
import './Media.css';
const MediaProps = ({ title, text, buttonUrl,imageUrl }) => {
  return (
    <div>
      <h5 className='downloadtitle mb-2'>{title}</h5>
      <p className='downloadtext'>{text}</p>
      <a href={buttonUrl} className="btn btn-danger mt-3">Download <i className='fa fa-download'></i></a>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default MediaProps;
