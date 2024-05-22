import React from 'react';

const MediaProps = ({ title, text, buttonUrl,imageUrl }) => {
  return (
    <div>
      <h5 className='downloadtitle'>{title}</h5>
      <p className='downloadtext'>{text}</p>
      <a href={buttonUrl} className="btn btn-danger">Download <i className='fa fa-download'></i></a>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default MediaProps;
