import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
   
  return (
    <div className='container-fluid footerbg  p-3 '>
      <div className='container'>
        <div className=' row d-flex justify-content-between align-items-center py-3'>
          <div className=' col-md-8 d-flex gap-3'>
            <Link to='/terms' className='text-decoration-none text-white footerfont'>
              <i className="fas fa-chevron-right chevron"></i> Terms Of Use
            </Link>
            <Link to='/privacy' className='text-decoration-none text-white  footerfont'>
              <i className="fas fa-chevron-right chevron"></i> Privacy Policy
            </Link>
            <Link to='/cookie' className='text-decoration-none text-white  footerfont'>
              <i className="fas fa-chevron-right chevron"></i> Cookie Policy
            </Link>
            <Link to='/refund' className='text-decoration-none text-white  footerfont'>
              <i className="fas fa-chevron-right chevron"></i> Refund and Cancellation Policy
            </Link>
          </div>
          <div className='col-md-4'>
            <p className='mb-0 text-white  footerfont me-0'>© 2016 Sahaayata. All Rights Reserved.</p>
          </div>
        </div>
      </div>
     
    </div>
    
  );
}

export default Footer;