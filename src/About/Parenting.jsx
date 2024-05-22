import React from 'react'
import './about.css'
import parent1 from '../assets/2-family-Indian.jpg'
import parent2 from '../assets/parenting_words.png'
import SocialMedia from '../Social Media/SocialMedia'


function Parenting() {
  return (
    <div className=''>
    <div className='container py-5'>
      <h1 className='page1_heading'>Sahaayata - For Parenting</h1>
      <div className='py-5 d-flex flex-wrap justify-content-evenly'>
        <img className='img-fluid mb-4 ' src={parent1} alt="" />  
        <img className='img-fluid mb-4' src={parent2} alt="" />            
      </div>
      <div className='d-flex flex-column gap-3 my-4'>
        <p>Moulding the personality - specifically students, youth, marginal sections of society :</p>        
        <p>Looks up to re-creating / nurturing a better personality, bettering the living process, enabling the body-mind-heart-spirit interconnectedness within and with others.</p>
      </div>
        
        <div className='pt-5'>
          <SocialMedia />
        </div>
        
    </div>
  
</div>
  )
}

export default Parenting
