import React from 'react'

function PressProps({ title }) {
  return (
    <div>
      <h5 className='downloads'>{title}</h5>
      <img src='../press_release.jpeg' alt="" className='pressimage my-4'/>
    </div>
  )
}

export default PressProps