import React from 'react'
import MediaProps from './MediaProps'

function Downloads() {
  return (
    <div className='container my-5'>
      <h3 className='downloads'>Downloads</h3>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <MediaProps title="Sahaayata E-Leaflet" text="A 4-page leaflet describing the vision and the activities of Sahaayata" buttonUrl="../privacy folder/.pdf"  />
        </div>
        <div className='col-md-4'>
          <MediaProps title="Sahaayata Vardaan Course (Colour)" text="A 4-page Multi Colour E-leaflet describing the Sahaayata 2 Days Vardaan Course" buttonUrl="../privacy folder/Media 2.pdf"  />
        </div>
        <div className='col-md-4'>
          <MediaProps title="Sahaayata Vardaan Course (One Colour)" text="A 2-page Single Colour E-leaflet describing the Sahaayata 2 Days Vardaan Course" buttonUrl="../privacy folder/Media 3.pdf"  />
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-md-4'>
          <MediaProps title="Kalash Puja" text="A 2-page E-leaflet describing the requirements and procedures of Kalash Puja" buttonUrl="../privacy folder/Media 4.pdf"  />
        </div>
        <div className='col-md-4'>
          <MediaProps title="Chakra Dhyana" text="A 2-page E-leaflet describing the procedures to activate chakras" buttonUrl="../privacy folder/Media 5.pdf"  />
        </div>
        <div className='col-md-4'>
          <MediaProps title="Create Your own Divine Medicine" text="A 1-page E-leaflet describing the procedure to create your own Divine medicine" buttonUrl="../privacy folder/Media 6.pdf"  />
        </div>
      </div>

    </div>
  )
}

export default Downloads