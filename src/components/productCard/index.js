import React from 'react';

import './style.scss';

const ProductCard = (props) => {
  const { img, name, desc, price } = props;

  return (
    <div id='productCard'>
      <img src={img} alt='img' className='productImg' />
      <div className='productContent'>
        <h3 className='productName'>{name}</h3>
        <span className='productDesc'>{desc}</span>
        <div className='productPrice'>{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
