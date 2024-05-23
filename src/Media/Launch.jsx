import React from 'react'
import PressProps from './PressProps'
import { Link } from 'react-router-dom'
import './Media.css';
import SocialMedia from '../Social Media/SocialMedia'
function Launch() {
  return (
    <div className='container my-5'>
      <PressProps title='Press Release - Introduction'/>
      <h3 className='pressmail'>www.sahaayata.org</h3>
      <p className='downloadtitle mt-2'>Sahaayata – Help yourself to help others</p>
      <p className='downloadtext mt-2'>Is a socio-spiritual organisation formed with an objective of empowering every individual, family and organisation in general and the under-privileged in particular.</p>
      <p className='downloadtext mt-2'>Sahaayata launched its website www.sahaayata.org on this auspicious day of Maha Shivaratri On Monday 7th March 2016 at 2:47 pm at the Sahaayata Prayer, Healing and Meditation Centre, Gandhi Nagar, Brahmapur, Odisha.</p>
      <p className='downloadtext mt-2'>'The world is changing before our eyes externally. Connectivity is making this world a global village more than ever. Just about everything can be attained by technology. So, outreach that is anytime, anywhere is a reality of today.</p>
      <p className='downloadtext mt-2'>The Sahaayata Prayer and Meditation Centre, an initiative headquartered in Brahmapur and envisioned by a person who has made his mark in the extended world of government, industry and glamour with his insightful perceptions and incisive addressal of the suffering human condition carries a global vision. It draws inspiration from the timeless Indian adage “Vasudaiva Kutumbakam” – The whole world is one family.</p>
      <p className='downloadtext mt-2'>Sri Kiran, shows a maturity far beyond his years and would like to bring all that he has assimilated and learnt from the wide world outside to one and all, wherever they may be. Be it addressal of various functional aspects of life or the spiritual and the mystic, Sahaayata helps you empower yourself and extend this empowerment towards a capacity to help others.
Speaking of technology and its ability to reach out, what better day to launch the website of this organization, www.sahaayata.org than on the auspicious day of Mahashivaratri, a day of sacredness and the celebration of the Divine within each of us. Sahaayata sees the Divine as our fundamental resource and aims to ignite this spark, this dynamic hotline for each of us, where we feel connected to each other. And the website would be a great enabler.</p>
      <p className='downloadtext mt-2'>Free prayer sessions, individual and group counselling, healing sessions, life coaching workshops, poojas and so many other traditional and new age technologies would be offered to people under the aegis of Sahaayata in both online and offline models.</p>
      <p className='downloadtext mt-2'>Sahaayata is a movement in human consciousness and they urge every one from all faiths to participate in its mission. As one discovers oneself, one also discovers the potential and power within as agents of social change. Individual change leads to family change and community changes. Sahaayata also believes in Swach Hruday, Swach Bhaarat.</p>
      <p className='downloadtext mt-2'>Yes, Sahaayata is a platform for all, wherever one may be, together we can enable our own healing and empowerment, both individually and collectively.</p>
      <p className='downloadtext mt-2'>Come, let us walk together in a journey of fulfilment.</p>
      <p className='downloadtext mt-2'>We invite you to partner with us to create a better world for each of us individually and collectively.</p>
      <h3 className='downloadtitle mt-3'>SAHAAYATA PRAYER and MEDITATION CENTRE</h3>
      <p className='downloadtext mt-2'>2nd Floor, Lane Opposite to Hotel Moti, Canal Street, 2nd Lane Extn. Gandhi Nagar,</p>
      <p className='downloadtext mt-2'>Brahmapur, Ganjam Dist., Odisha – 760001, Telefax: +91 680 2225691,</p>
      <p className='downloadtext mt-2'>E-mail:<a href="mailto:info@sahaayata.org" className='text-decoration-none text-primary'> info@sahaayata.org</a> , Website:<Link to='/' className='text-decoration-none text-primary'> www.sahaayata.org</Link></p>
      <p className='downloadtitle mt-2'>HELPLINE: +91 9078981918</p>
      <a href='../privacy folder/launch press.pdf' className='btn btn-danger float-end'>Download Press Release</a>
      <SocialMedia/>
    </div>
  )
}

export default Launch