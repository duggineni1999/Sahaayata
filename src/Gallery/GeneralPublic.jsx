import React from 'react'
import './gallery.css'
import SocialLinks from '../Social Media/SocialMedia';
const imageFilenames = [
    '1.jpg',
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
    '17.jpg','18.jpg' // and so on up to 30 images
  ];
function GeneralPublic() {
    const images = imageFilenames.map(filename => {
        return require(`../Assets/GeneralPublic/${filename}`);
      });
  return (
    <div>
        <div className='container my-5'>
            <h2 className='mb-4'>General Public</h2>
            <p>Sahaayata works on integrated growth of individuals... touching the physical, emotional and spiritual aspects of living. Its various workshops for the mass public brings into focus the root cause of our present state of being, bringing out the direction and patterns of our life and also provides solutions for introducing us to the purpose of our birth and the mission that we need to fulfil in life and also how to proceed ahead in doing so successfully. Needless to mention, Sahaayata also covers the keys determinants of living integrally, like relationships building, discovering our emotional patterns and receiving and drawing power from divinity to lead our lives to achieving its purpose.</p>
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

export default GeneralPublic
