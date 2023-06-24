// @ts-ignore
import React from 'react';
import ProductInfo from './subcomponents/ProductInfo';
import ProductOverview from './subcomponents/ProductOverview';

 const Overview = () => {
  return (
    <div className='container'>
      <ProductInfo />
      {/* <StyleSelector />
      <AddToCart />
      <ImgGallery /> */}
      <ProductOverview />
    </div>
  );
}

export default Overview;