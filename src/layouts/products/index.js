import './style.scss';

import React from 'react';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import { dataProduct } from 'src/mockData/dataMock';
import ProductCard from 'src/components/productCard';

function ProductsLayout() {
  return (
    <div className='productLayout'>
      <div className='layoutHeader'>
        <Header />
      </div>

      <section className='productsPage'>
        <div className='bodyWrap'>
          <h1 className='bodyTitle'>Cà phê sữa đá</h1>
          <p className='bodySub_title'>
            Được chiết xuất từ 100% hoa Hibiscus tự nhiên, không chứa caffeine cùng toppings trái cây đa dạng, Hi-Tea
            Healthy là lựa chọn cho những ai muốn chăm sức khoẻ và yêu chiều bản thân.
          </p>
          <div className='listCard'>
            {dataProduct.map((product, idx) => (
              <ProductCard {...product} key={idx} />
            ))}
          </div>
        </div>
      </section>

      <div className='layoutFooter'>
        <Footer />
      </div>
    </div>
  );
}

export default ProductsLayout;
