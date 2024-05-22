import React from 'react'
import './about.css'
import life from '../Assets/life.jpg'
import SocialMedia from '../Social Media/SocialMedia'
function Vision() {
  return (
    <div className='pt-5'>
        <div className='container py-5'>
          <h1 className='page1_heading'>Sahaayata - The Vision</h1>
          <div className='py-5 d-flex justify-content-center'>
            <img className='img-fluid vision_img' src={life} alt="" />            
          </div>
          <div className='d-flex flex-column gap-4 my-4'>
            <h6>Helping people to help others</h6>
            <p className=''>Set up with this vision to serve and guide people from all walks of life who can find practical solutions to fulfill everyday needs and challenges. To fulfill this need by serving as a conduit to bridge their scared intent, channeling their resources and enabling people to be beneficiaries in the form of physical Grace manifesting in their life.</p>
          </div>
            
            <div className='py-5'>
              <SocialMedia />
            </div>
            
        </div>
      
    </div>
  )
}

export default Vision
