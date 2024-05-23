import React from 'react'
import './Media.css';
import mediaimg from '../Assets/Media/press_release.jpeg'
function PressProps({ title }) {
  return (
    <div>
      <h5 className='downloads'>{title}</h5>
      <img src={mediaimg} alt="" className='pressimage my-4'/>
    </div>
  )
}

export default PressProps