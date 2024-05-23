import React from 'react'
import './about.css'
import personal from '../Assets/pc1.jpg'
import SocialMedia from '../Social Media/SocialMedia'
import { Link } from 'react-router-dom';

function PersonalProtal() {
  return (
    <div className=''>
    <div className='container py-5'>
      <h1 className='page1_heading'>Sahaayata - a Personal Portal</h1>
      <div className='py-5 d-flex justify-content-center'>
        <img className='img-fluid' src={personal} alt="" />            
      </div>
      <div className='d-flex flex-column gap-3 my-4'>
        <h6>Sahaayata as a personal portal - for that timely direction in life</h6>
        <p>Using powerful time tested&nbsp;techniques, procedures, processes engaging the interconnectedness of mind - body - spirit –&nbsp;consciousness – heart and relationships for leading a fulfilled life and for a happy and joyous living.</p>        
        <p>Guidance through sacred rituals – to realize the vision / purpose of one’s birth – to achieve success in health, wealth, relationships, success in one's endeavours, apart from experiencing most profound spiritual and altered states of consciousness.</p>
       <div className='d-flex justify-content-center'>
       <button className='btn border-0 personal_button mt-4 '>
            <Link to="/immediate/personal-counselling-and-guidance" className="btn btn-default border-0">
                Personal Counselling and Guidance
            </Link>
        </button>

       </div>
        
      </div>
        
        <div className='py-5'>
          <SocialMedia />
        </div>
        
    </div>
  
</div>
  )
}

export default PersonalProtal
