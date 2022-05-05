import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerWrap'>
        <div className='copyRight'>Coffee Shop ® 2022 All rights reserved</div>
        <div className='social'>
          <Link target='_blank' to={`https://www.instagram.com/`} className='footerLink'>
            Instagram
          </Link>
          <Link target='_blank' to={`https://www.facebook.com/`} className='footerLink'>
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
