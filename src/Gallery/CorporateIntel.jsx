import React from 'react'
import './gallery.css'
import SocialLinks from '../Social Media/SocialMedia';
import img1 from '../Assets/CorporateIntel/1.jpg'
const imageFilenames = [
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg','18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', 
    '32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg', // and so on up to 30 images
  ];
function CorporateIntel() {
    const images = imageFilenames.map(filename => {
        return require(`../Assets/CorporateIntel/${filename}`);
      });
  return (
    <div>
        <div className='container my-5'>
            <h2 className='mb-4'>Corporate and Intelligentia</h2>
            <p>Sahayaata's work will perhaps find its greatest beneficiaries amongst corporate citizens and the intellectual class who mould the thoughts of the nation and impart direction to the progress of the nation at large. Sahaayata programmes focus on the needs of this segment of society as it has the power to shape the destiny of a nation. Sowing the seeds of spiritual living early in the career, leads to the growth of a fulfilled individual with a flowering heart, whose life stands dedicated to nation building in the chosen discipline and profession. The vast gamut of learned professionals, making a living from careers in engineering, medicine, law, education, business, bureaucracy, politics, etc. need a whole package of guidance for their personal, emotional, psychological, spiritual growth besides experiencing higher states of consciousness. The programmes of Sahaayata are critically customised for enabling all these factors to be integrated into a spiritual vial, that entirely boosts individual performance to superlative levels and more importantly, in the direction beneficial to nation building.</p>
             <div className='d-flex justify-content-center my-5'>
             <div className='row rural'  style={{maxWidth:'1000px'}}>
                <div className='col-12 mb-3'>
                    <img src={img1} className='img-fluid ' alt="" />
                </div>
                  {images.map((image, index) => (
                      <div key={index} className='col-4 mb-3'>
                          <img src={image} alt={`Image ${index + 1}`} className='img-fluid' />
                      </div>
                  ))}
              </div>
             </div>

             <SocialLinks />
              
        </div>
      
    </div>
  )
}

export default CorporateIntel
