import React from 'react'
import holding from '../Assets/Doante/holding_hands_.jpeg';
import './Donate.css';
import qr from '../Assets/Doante/qr.png'
import SocialMedia from '../Social Media/SocialMedia'
function Donate() {
  return (
    <div className='container my-5'>
        <h3>Make a Donation / Sponsor</h3>
        <img src={holding} className='holdingimage my-4'></img>
        <p className='mt-2'>Sahaayata is a socio - spiritual, not for profit making organisation with an objective to help people from all cross sections of society to improve their health, wealth creation, relationships, inner personality, success and happiness.  This is achieved by Sahaayata conducting various programs and organising different activities acrross different spheres of human existence. In order to help the communities, particularly across marginal cross sections, there is an expense involved.  Our sincere appeal to all is whatever you want to voluntarily contribute, either in cash or in kind, you may donate by scanning the QR Code below or by clicking the button below it.  Thank you for your generous and whole;hearted support for this noble cause.</p>
        <img src={qr} className='holdingsimage my-4'></img>
        <div class="d-flex justify-content-center">
            <a href='#' className='btn btn-danger'>Donate Now</a>
        </div>
        <SocialMedia/>
    </div>
  )
}

export default Donate