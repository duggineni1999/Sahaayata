import React from 'react'
import './about.css'
import jointfamily from '../assets/JointFamily.png'

import SocialMedia from '../Social Media/SocialMedia'


function ByDesign() {
  return (
    <div className=''>
    <div className='container py-5'>
      <h1 className='page1_heading'>Sahaayata - By Design</h1>
      <div className='py-5 d-flex flex-wrap justify-content-evenly'>
        <img className='img-fluid mb-4 ' src={jointfamily} alt="" />  
                 
      </div>
      <div className='d-flex flex-column gap-3 my-4'>
        <h5>Quality of Living : Better Relationships : Helping Society </h5>
        <p >Dedicated to serve as a one stop solution for a plethora of issues ranging from academics, marriage,&nbsp;counseling, sports, coping with health issues, food related issues (hunger/diet/malnutrition), to more&nbsp;subtler issues like relationships, upbringing, personal success, creativity, professional counseling&nbsp;and family / ancestral guidance / handling failures / breakups / rejections / work relationship related&nbsp;stress / organizational issues …&nbsp;</p>
      </div>
        
        <div className='pt-5'>
          <SocialMedia />
        </div>
        
    </div>
  
</div>
  )
}

export default ByDesign
