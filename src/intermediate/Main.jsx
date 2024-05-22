import React from 'react';

function Main({ title, imageUrl, content }) {
  return (
    <div >
      <h4 className='pt-5'>{title}</h4>
      <div className='pt-5 d-flex justify-content-center align-items-center'>
        <img src={imageUrl} alt=''  />
        </div>
<div className='py-5 '>
        {content}
        </div>
      </div>
   
  );
}



export default Main;
