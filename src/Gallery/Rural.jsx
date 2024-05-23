import React from 'react'
import './gallery.css'
import SocialLinks from '../Social Media/SocialMedia';
const imageFilenames = [
    '1.png',
    '2.png',
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
    '32.jpeg', // and so on up to 30 images
  ];
function Rural() {
    const images = imageFilenames.map(filename => {
        return require(`../Assets/Rural/${filename}`);
      });
  return (
    <div>
        <div className='container my-5'>
            <h2 className='mb-4'>Rural</h2>
            <p>RURAL WORK is the essence of any humanitarian effort. Reaching out to the underprivileged sections of society and helping them in everyday living with the bare minimum necessities of life like, good health, primary education, sanitation, access to pure drinking water and improving their overall living condition is the focus of Sahaayata. Besides these physical needs, Sahaayata also focuses on social, psychological and emotional needs like, educating the rural folk on subtler issues like happy relationships, cultural activities, local rituals, prayers and other engagements that bond the people to work for the overall village development.</p>
             <div className='d-flex justify-content-center my-5'>
             <div className='row rural'  style={{maxWidth:'1000px'}}>
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

export default Rural
