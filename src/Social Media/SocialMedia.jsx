import React, { useEffect } from 'react';
import './social.css'
 // Ensure you have Bootstrap Icons included

const SocialLinks = () => {
  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className='d-flex ' style={{ textAlign: 'center' }}>
      <div className="wrapper">
        <a href="https://www.facebook.com/" className="icon facebook" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook">
          <span><i className="fa-brands fa-facebook"></i></span>
        </a>
        <a href="https://www.twitter.com/" className="icon twitter" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
          <span><i className="fa-brands fa-twitter"></i></span>
        </a>
        <a href="https://www.instagram.com/" className="icon instagram" data-bs-custom-class="custom-tooltip" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram">
          <span><i className="fa-brands fa-instagram"></i></span>
        </a>
        <a href="https://www.youtube.com/" className="icon youtube" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube">
          <span><i className="fa-brands fa-youtube"></i></span>
        </a>
        <a href="https://in.pinterest.com/" className="icon pinterest" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest">
          <span><i class="fa-brands fa-pinterest"></i></span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
