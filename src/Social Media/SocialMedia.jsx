import React from 'react'
import './social.css'

function SocialMedia() {
  return (
    <div className='d-flex' style={{textAlign:'center'}}>
      <div className="wrapper">
        <a href="https://www.facebook.com/" className="icon facebook" target="_blank" rel="noopener noreferrer">
          <div className="tooltip">Facebook</div>
          <span><i className="fab fa-facebook-f"></i></span>
        </a>
        <a href="https://www.twitter.com/" className="icon twitter" target="_blank" rel="noopener noreferrer">
          <div className="tooltip">Twitter</div>
          <span><i className="fab fa-twitter"></i></span>
        </a>
        <a href="https://www.instagram.com/" className="icon instagram" target="_blank" rel="noopener noreferrer">
          <div className="tooltip">Instagram</div>
          <span><i className="fab fa-instagram"></i></span>
        </a>
        
        <a href="https://www.youtube.com/" className="icon youtube" target="_blank" rel="noopener noreferrer">
          <div className="tooltip">Youtube</div>
          <span><i className="fab fa-youtube"></i></span>
        </a>
      </div>
    </div>

  )
}

export default SocialMedia
