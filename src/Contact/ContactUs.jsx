import React from 'react'
import contactus from '../Assets/contact/contact_us.jpeg'
function ContactUs() {
  return (
    <div className='container my-5'>
        <div>
<h4>Contact Us</h4>
<img src={contactus}></img>
</div>
<div className='col-md-12'>
    <div className='row d-flex'>
    <div className='col-md-6'>
        <p>Free Healing, Prayers and Personal Counselling</p>
        <p>+91 9439847119, +91 9078981918</p>
        <a href='#'>help@sahaayata.org</a>
        <p className='mt-5'>Programs and Courses Coordinator</p>
        <p>+91 9666500055, +91 8939610768</p>
        <a href='#'>program@sahaayata.org</a>
    </div>
    <div className='col-md-6'>
    Sahaayata Prayer and Meditation Centre
    <div className='col-md-6'>
    <p>Canal Street, 2nd Lane Extn. Gandhi Nagar,
Brahmapur, Ganjam Dist., Odisha – 760001,
Telefax: +91 680 2225691, +91 9078981918</p>
<p>E-mail:<span><a href='#'>info@sahaayata.org</a></span></p>
<p>Website:<span><a href='#'> www.sahaayata.org</a></span></p>
<p>Follow us on:<span><a href='https://www.telegram.me/sahaayata'>www.telegram.me/sahaayata</a></span> </p>
<p><span><a href='https://www.facebook.com/Sahaayatainternational'> FACEBOOK</a></span> | <span><a href='https://www.instagram.com/sahaayata/'> INSTAGRAM </a></span>|<span><a href='https://www.youtube.com/channel/UCdalzmF2eJ2UDf6T60pwTbA'>  YOUTUBE </a></span> |<span><a href='https://www.linkedin.com/in/sahaayata-international-88b7471a9/'>  LINKEDIN</a></span></p>
</div>
    </div>
    </div>
</div>
    </div>
  )
}

export default ContactUs