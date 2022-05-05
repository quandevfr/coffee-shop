import React from 'react';

import './style.scss';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerWrap'>
        <div className='copyRight'>Coffee Shop ® 2022 All rights reserved</div>
        <div className='social'>
          <a target='_blank' rel='noreferrer' href={`https://www.instagram.com/`} className='footerLink'>
            Instagram
          </a>
          <a target='_blank' rel='noreferrer' href={`https://www.facebook.com/`} className='footerLink'>
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
