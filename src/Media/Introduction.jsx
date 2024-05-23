import React from 'react'
import PressProps from './PressProps'
import './Media.css';
import SocialMedia from '../Social Media/SocialMedia'
function Introduction() {
  return (
    <div className='container my-5'>
        <PressProps title='Press Release - Introduction'/>
        <p className='downloadtext mt-2'>Does our vision inspire you?</p>
        <p className='downloadtext mt-2'>Would you like to partner us in creating a better society?</p>
        <p className='downloadtext mt-2'>This section would help you download press releases, programme briefs and much more. Feel free to share this with your world and spread the cheer. Journalists, educationists, NGO leaders, HR heads and others can find this section very useful. If you need something more, you can reach us at <a href="mailto:info@sahaayata.org" className='text-decoration-none text-primary'>info@sahaayata.org</a></p>
        <SocialMedia/>
    </div>
  )
}

export default Introduction