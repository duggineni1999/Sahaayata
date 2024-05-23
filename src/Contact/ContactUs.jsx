import React from 'react'
import contactus from '../Assets/contact/contact_us.jpeg'
import './contact.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SocialMedia from '../Social Media/SocialMedia'
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
function ContactUs() {
    return (
        <div className='container my-5'>
            <div>
                <h4>Contact Us</h4>
                <img src={contactus}></img>
            </div>
            <div className='col-md-12 my-4'>
                <div className='row d-flex'>
                    <div className='col-md-6'>
                        <p className='headings'>Free Healing, Prayers and Personal Counselling</p>
                        <div className='subpara'>
                        <p>+91 9439847119, +91 9078981918</p>
                        <a href='#'>help@sahaayata.org</a>
                        <p className='mt-5'>Programs and Courses Coordinator</p>
                        <p>+91 9666500055, +91 8939610768</p>
                        <a href='#'>program@sahaayata.org</a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                       <p className='headings'>Sahaayata Prayer and Meditation Centre</p> 
                        <div className='col-md-6 subpara'>
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
            <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.google.com/maps?ll=19.3085,84.790389&z=16&t=m&hl=en-US&gl=US&mapclient=embed</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>

            </div>
            <SocialMedia/>
        </div>
    )
}

export default ContactUs