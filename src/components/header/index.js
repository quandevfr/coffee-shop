import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => {
  return (
    <div id='header'>
      <div className='headerWrap'>
        <div className='logo'>Coffee shop</div>
        <div className='menu'>
          <Link to={`/`} className='menuLink'>
            Trang Chủ
          </Link>
          <Link to={`#products`} className='menuLink'>
            Sản Phẩm
          </Link>
          <Link to={`#products`} className='menuLink'>
            Giới Thiệu
          </Link>
          <Link to={`#products`} className='menuLink'>
            Liên Hệ
          </Link>
        </div>
        <div className='sign'>Đăng nhập</div>
      </div>
    </div>
  );
};

export default Header;
