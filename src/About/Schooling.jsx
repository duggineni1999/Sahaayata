import React from 'react'
import './about.css'
import childstudy from '../Assets/children_studying.jpg'

import SocialMedia from '../Social Media/SocialMedia'


function Schooling() {
  return (
    <div className=''>
    <div className='container py-5'>
      <h1 className='page1_heading'>Sahaayata - Schooling and Child Management</h1>
      <div className='py-5 d-flex flex-wrap justify-content-evenly'>
        <img className='img-fluid  ' src={childstudy} alt="" />  
                 
      </div>
      <div className='d-flex flex-column gap-3 my-4'>
        <p >Its wealth of experience can help school administration in its children management areas in appreciating child psychology and modeling its existing curriculum around integrating the ‘parents – child – siblings – friends - teacher’ centric relationships, for that wholesome experience in coping with the demanding curriculum. </p>
      </div>
        
        <div className='pt-5'>
          <SocialMedia />
        </div>
        
    </div>
  
</div>
  )
}

export default Schooling
