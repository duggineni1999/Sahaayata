import React from 'react'
import './gallery.css'
import gallery1 from '../Assets/Gallery/gallery1.jpg'
import gallery2 from '../Assets/Gallery/gallery2.jpg'
import gallery3 from '../Assets/Gallery/gallery3.jpg'
import gallery4 from '../Assets/Gallery/Centre_Rear.jpg'
import gallery5 from '../Assets/Gallery/Centre_Lord.jpg'
import gallery6 from '../Assets/Gallery/Centre_Lord_close.jpg'
import gallery7 from '../Assets/Gallery/Centre_Full_Front.jpg'
import gallery8 from '../Assets/Gallery/Centre_Front_Full_SW.jpg'
import gallery9 from '../Assets/Gallery/gallery9.jpg'
import SocialLinks from '../Social Media/SocialMedia'

function SahaayatCenter() {
  return (
    <div>
        <div className='container my-5'>
            <h2 className='mb-4'>Sahaayata Prayer and Meditation Centre</h2>
            <p>This centre is the vortex of prayers, healings, blessings, life guidance, career – family – marital counseling, besides mainly spiritual emancipation. Designed to provide a homely environment, which is devoted to the larger cause of humanitarian work, it also serves as a spiritual powerhouse to channel one’s life in the path of growth, contribution and success. </p>
            <div className='d-flex justify-content-center' >
            <div className='row center my-5' style={{maxWidth:'1000px'}}>
                <div className='col-4 mb-3'>
                    <img src={gallery1} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3'>
                    <img src={gallery2} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3 '>
                    <img src={gallery3} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3'>
                    <img src={gallery4} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3'>
                    <img src={gallery5} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3'>
                    <img src={gallery6} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3 '>
                    <img src={gallery7} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3'>
                    <img src={gallery8} className='img-fluid' alt="" />
                </div>
                <div className='col-4 mb-3'>
                    <img src={gallery9} className='img-fluid' alt="" />
                </div>

            </div>

            </div>
            
            <SocialLinks />

        </div>
      
    </div>
  )
}

export default SahaayatCenter
