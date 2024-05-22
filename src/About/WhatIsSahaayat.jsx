import React from 'react'
import './about.css'
import ImageSahaayat from '../assets/whatissahaayat.jpg'
import SocialMedia from '../Social Media/SocialMedia'
function WhatIsSahaayat() {
  return (
    <div className='pt-5'>
        <div className='container py-5'>
          <h1 className='page1_heading'>What is Sahaayata?</h1>
          <div className='py-5 d-flex justify-content-center'>
            <img className='img-fluid' src={ImageSahaayat} alt="" />            
          </div>
          <div className='d-flex flex-column gap-5 my-4'>
            <p className=''>“Sahaayata” is a Socio-Spiritual not-for-profit making organisation which caters to the life needs of people in terms of both internal and external world of an individual, with an objective to learn, grow, receive from everyone and the universe and in turn contribute back in gratitude to the universe. Hence the maxim: “Helping yourself to help others”. This is achieved by Sahaayata conducting various courses and activities free of cost.</p>
            <p className=''>Sahaayata works with all age groups in coping with and successfully managing the challenges thrown at us all the time – from relationships, education, marriage, career, old age etc. It is at every stage in life that we need a different set of skills to be able to manage it well effectively and most importantly, enjoyably. More often than not we end up making a miserable mess of the whole experience and end up with the proverbial bitter taste in the mouth – wanting us to relive the whole experience in an all-together new way. Sadly, we cannot rewind time in this one life together – Sahaayata is here to help us transcend the challenge of life and make it one of the most important and enjoyable experience of our life. Equipped with a very learned faculty with deeply experienced teachings to serve as guiding lights, the Centre is very basic but well equipped to handle the demands from both individuals and mass groups including corporates and institutions. To partake of its life transforming offerings, please read, register and participate in the weekly / daily events to have a taste of its healing medicine! You are welcome to take Sahaayata and make it your personal waypoint to success!</p>
          </div>
            
            <div className='py-5'>
              <SocialMedia />
            </div>
            
        </div>
      
    </div>
  )
}

export default WhatIsSahaayat
