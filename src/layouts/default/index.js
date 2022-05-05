import React from 'react';

import Footer from 'src/components/footer';
import Header from 'src/components/header';
import OutstandingCard from 'src/components/outStandingCard';
import ProductCard from 'src/components/productCard';
import { dataProduct } from 'src/mockData/dataMock';

import './style.scss';

const DefaultLayout = () => {
  return (
    <div id='defaultLayout'>
      <div className='layoutHeader'>
        <Header />
      </div>
      <div style={{ height: '56px' }} />
      <div className='layoutBanner' />

      <section id='products' className='layoutProduct'>
        <div className='bodyWrap'>
          <h1 className='bodyTitle'>Cà phê sữa đá</h1>
          <p className='bodySub_title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className='listCard'>
            {dataProduct.map((product, idx) => (
              <ProductCard {...product} key={idx} />
            ))}
          </div>
        </div>
      </section>
      <section id='outstanding' className='layoutOutstanding'>
        <div className='bodyWrap'>
          <h1 className='bodyTitle'>Cà phê sữa đá</h1>
          <p className='bodySub_title outstandingDesc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining.
          </p>
          <div className='outstandingList'>
            <OutstandingCard />
            <OutstandingCard />
            <OutstandingCard />
          </div>
        </div>
      </section>

      <div className='layoutFooter'>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
