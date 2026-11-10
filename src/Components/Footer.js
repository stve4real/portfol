import React from 'react';
import './Footer.css'


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='contact w-100 bg-dark d-flex flex-column justify-content-center align-items-center pt-4 pb-3 text-light'>
      <p className='mb-1'>Designed & built with Sylvester Sunday</p>
      <p className='mb-0'>© {currentYear} | @code with Sylvester</p>
    </footer>
  );
}

export default Footer;