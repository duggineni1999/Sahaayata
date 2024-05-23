import React from 'react'
import { Link } from 'react-router-dom'
import './Media.css';
import mediaimg from '../Assets/Media/press_release.jpeg'
import SocialMedia from '../Social Media/SocialMedia'
function Vardaan() {
  return (
    <div className='container my-5'>
      <h5 className='vardaan'>Press Release - Sahaayata 1-Day Vardaan Course</h5>
      <h3 className='vardaan text-center pt-3'>Sahaayata Vardaan Course</h3>
      <img src={mediaimg} className=' pressimage my-4'></img>
      <h5 className='text-center vardaansaa'>Sahaayata announces Vardaan Course</h5>
      <h5 className='text-center vardaansaa pt-2'>– a composite offering from Sahaayata</h5>
      <p className='vardaantext mt-2'>Sahaayata – Help yourself to help others</p>
      <p className='vardaantext mt-2'>Is a socio-spiritual organisation formed with an objective of empowering every individual, family and organisation in general and the under-privileged in particular.</p>
      <p className='vardaantext mt-2'>Vardaan is a unique 1-day process conceived by Sahaayata for groups of individuals. The individuals could themselves be distinct or form a part of organized group from various institutions. All are welcome.</p>
      <p className='vardaantext mt-2'>The basic modules would look at:</p>
      <p className='vardaantext mt-2'>• Relationships with oneself, family and extended profiles.</p>
      <p className='vardaantext mt-2'>• Conflict resolution</p>
      <p className='vardaantext mt-2'>• Breakthrough techniques</p>
      <p className='vardaantext mt-2'>• Breathing techniques</p>
      <p className='vardaantext mt-2'>• Stress Relief</p>
      <p className='vardaantext mt-2'>• Success personality</p>
      <p className='vardaantext mt-2'>• ..and more</p>
      <p className='vardaantext mt-2'>The content would draw from ancient and new age techniques while the methodology would be lectures, insight/experience sharing, interactives, exercises, prayers, healings and so on. The faculty comes with over 15 - 20 years’ footprint in this domain and conducts this program absolutely free of cost anywhere in India. Travel, local hospitality and conveyances have to be arranged.</p>
      <div className='text-center'>
        <h5 className='vardaanforth mt-2'>Forthcoming Vardaan Course</h5>
        <h5 className='vardaansunday my-3'>Sunday, 19 June 2016 in Oriya</h5>
        <h5 className='vardaansaa'>at the Sahaayata Prayer and Meditation Centre in Brahmapur</h5>
        <h5 className='vardaanentry mt-3'>Entry free . All individuals above the age of 15 are welcome.</h5>
      </div>
      <p className='downloadtext mt-3'>For anywhere in India, the faculty can conduct programs for groups of 50 minimally on invitation.</p>
      <p className='downloadtext mt-2'>We invite you to partner with us to create a better world for each of us individually and collectively.</p>
      <h3 className='downloadtitle mt-3'>SAHAAYATA PRAYER and MEDITATION CENTRE</h3>
      <p className='downloadtext mt-2'>2nd Floor, Lane Opposite to Hotel Moti, Canal Street, 2nd Lane Extn. Gandhi Nagar,</p>
      <p className='downloadtext mt-2'>Brahmapur, Ganjam Dist., Odisha – 760001, Telefax: +91 680 2225691,</p>
      <p className='downloadtext mt-2'>E-mail:<a href="mailto:info@sahaayata.org" className='text-decoration-none text-primary'> info@sahaayata.org</a> , Website:<Link to='/' className='text-decoration-none text-primary'> www.sahaayata.org</Link></p>
      <p className='downloadtitle mt-2'>HELPLINE: +91 9078981918</p>
      <a href='#' className='btn btn-danger float-end'>Press Release</a>
      <SocialMedia/>
    </div>
  )
}

export default Vardaan