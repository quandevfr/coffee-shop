import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => {
  return (
    <div id='header'>
      <div className='headerWrap'>
        <div className='logo'>Coffee shop</div>
        <div className='menu'>
          <Link to='/' className='menuLink'>
            Trang Chủ
          </Link>
          <Link to='/products' className='menuLink'>
            Sản Phẩm
          </Link>
          <Link to='/abouts' className='menuLink'>
            Giới Thiệu
          </Link>
          <Link to='/contact' className='menuLink'>
            Liên Hệ
          </Link>
        </div>
        <Link to='/signin'>
          <div className='sign'>Đăng nhập</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
