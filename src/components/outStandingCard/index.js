import React from 'react';

import imgOutstanding from 'src/assets/images/img_outstanding.png';
import './style.scss';

const OutstandingCard = () => {
  return (
    <div id='outstandingCard'>
      <img src={imgOutstanding} alt='imgOutstanding' className='outstandingImg' />
      <div className='outstandingContent'>
        <h3 className='outstandingName'>Cà phê sữa đá</h3>
        <span className='outstandingDesc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
      </div>
    </div>
  );
};

export default OutstandingCard;
